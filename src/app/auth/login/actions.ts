"use server";

import { login } from "@/lib/auth";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function loginAction(email: string, password: string) {
  const result = await login(email, password);
  if (!result.success) return result;

  if (!result.user?.email) {
    throw new Error("User email missing from result");
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

  const token = await new SignJWT({ email: result.user.email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret);

  (await cookies()).set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  return result;
}
