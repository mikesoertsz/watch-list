import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Retrieve the current user from Supabase authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If a user is logged in and trying to access the home page, redirect them to the watch list page
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/watch-list", req.url));
  }
  // If no user is logged in and they are trying to access a page other than home, redirect them to the home page
  else if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  // run this middleware when the user tired to access any of the following routes
  matcher: ["/", "/watch-list"],
};
