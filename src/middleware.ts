import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

async function verifyJWT(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  const { payload } = await jwtVerify(token, secret);
  return payload;
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  if (pathname === "/") return NextResponse.next();

  if (pathname.startsWith("/auth/login")) {
    if (token) {
      try {
        await verifyJWT(token);
        return NextResponse.redirect(new URL("/dashboard", req.url));
      } catch (err) {
        console.error("JWT verification failed on /auth/login:", err);
        const res = NextResponse.next();
        res.cookies.set("auth_token", "", { maxAge: 0 });
        return res;
      }
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    try {
      await verifyJWT(token);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT verification failed on /dashboard:", err);
      const res = NextResponse.redirect(new URL("/auth/login", req.url));
      res.cookies.set("auth_token", "", { maxAge: 0 });
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
