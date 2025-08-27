import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const demoUser = {
  email: "admin@badhan.com",
  // password: "password123"
  password: await bcrypt.hash("password123", 10),
};

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email !== demoUser.email) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const match = await bcrypt.compare(password, demoUser.password);
  if (!match) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ email: demoUser.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  const res = NextResponse.json({ message: "Login successful" });
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/",
  });

  return res;
}
