import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

// Demo user (for testing only)
const demoUser = {
  email: "admin@badhan.com",
  // pre-hashed password
  password: await bcrypt.hash("password123", 10),
};

export async function POST(req: Request): Promise<NextResponse> {
  const { email, password } = await req.json();

  if (email !== demoUser.email) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const match = await bcrypt.compare(password, demoUser.password);
  if (!match) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate JWT token for 1 day
  const token = jwt.sign({ email: demoUser.email }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  const res = NextResponse.json({ message: "Login successful" });

  // Set cookie
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return res;
}
