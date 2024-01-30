import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { STATIC_ROUTES } from "./constants/routes";
import { USER_ROLES } from "./constants/userRoles";
import { cookies } from "next/headers";

export async function middleware(req) {
  // const token = cookies().get("token")?.value;

  // const { _id: userId, role } = token
  //   ? jwt.decode(token)
  //   : { _id: null, role: null };

  // const isLoggedIn = userId && role === USER_ROLES.admin ? true : false;

  // const { origin, pathname } = req.nextUrl;

  // if (STATIC_ROUTES.includes(pathname)) return NextResponse.next();

  // if (isLoggedIn) {
  //   if (pathname === "/admin")
  //     return NextResponse.redirect(new URL("/admin/verifications", origin));
  // } else {
  //   if (pathname !== "/admin" && pathname.includes("/admin"))
  //     return NextResponse.redirect(new URL("/not-found", origin));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
