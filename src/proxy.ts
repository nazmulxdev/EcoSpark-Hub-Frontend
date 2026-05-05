import { NextRequest, NextResponse } from "next/server";
import { authService } from "./services/auth/auth.service";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/about",
    "/ideas",
    "/blogs",
  ];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  const { data, error } = await authService.getSession();

  if (error || !data) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url),
    );
  }

  const userRole = data.user?.role;

  if (!userRole) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url),
    );
  }

  const roleBasedRoutes: Record<string, string[]> = {
    "/admin/dashboard/:path*": ["ADMIN"],
    "/member/dashboard/:path*": ["MEMBER"],
    "/admin/dashboard": ["ADMIN"],
    "/member/dashboard": ["MEMBER"],
    "/dashboard/:path*": ["USER"],
    "/dashboard": ["USER"],
    "/ideas/:path*": ["ADMIN", "MEMBER", "USER"],
    "/blogs/:path*": ["ADMIN", "MEMBER", "USER"],
  };
  for (const path in roleBasedRoutes) {
    const regexStr =
      "^" + path.replace(/:[^/]+\*/g, ".*").replace(/:[^/]+/g, "[^/]+") + "$";

    const dynamicPath = new RegExp(regexStr);

    if (dynamicPath.test(pathname)) {
      if (!roleBasedRoutes[path]!.includes(userRole)) {
        return NextResponse.redirect(
          new URL(`/login?redirect=${pathname}`, request.url),
        );
      }
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/dashboard/:path*",
    "/member/dashboard/:path*",
    "/dashboard/:path*",
    "/ideas/:path*",
    "/blogs/:path*",
    "/admin/dashboard",
    "/member/dashboard",
    "/dashboard",
  ],
};
