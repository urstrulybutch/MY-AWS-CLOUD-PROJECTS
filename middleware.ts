import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If no session and trying to access protected routes, redirect to login
  if (
    !session &&
    (req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/profile") ||
      req.nextUrl.pathname.startsWith("/my-swaps") ||
      req.nextUrl.pathname.startsWith("/find-swaps") ||
      req.nextUrl.pathname.startsWith("/group-swaps") ||
      req.nextUrl.pathname.startsWith("/messages") ||
      req.nextUrl.pathname.startsWith("/settings"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // If session and trying to access auth routes, redirect to dashboard
  if (session && (req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup"))) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.svg).*)"],
}
