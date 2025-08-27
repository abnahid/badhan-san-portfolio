import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  // Allow homepage ("/") always
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Handle login page
  if (pathname.startsWith("/login")) {
    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET!);
        // Already logged in → go to dashboard
        return NextResponse.redirect(new URL("/dashboard", req.url));
      } catch {
        // Invalid token → clear cookie and allow login
        const res = NextResponse.next();
        res.cookies.set("auth_token", "", { maxAge: 0 });
        return res;
      }
    }
    return NextResponse.next();
  }

  // Handle dashboard (protected route)
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("auth/login", req.url));
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("auth/login", req.url));
    }
  }

  // Allow everything else
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
