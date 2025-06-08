import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtected = pathname.startsWith("/dashboard") || pathname.startsWith("/profile")

  if (isProtected) {
    // Check for demo mode in cookies
    const isDemoMode = request.cookies.get("avian-demo-mode")?.value === "true"

    // If in demo mode, allow access
    if (isDemoMode) {
      return NextResponse.next()
    }

    // Check for our custom auth cookie/header
    const hasAuthCookie = request.cookies.has("avian-auth")

    // If not authenticated, redirect to the sign-in page
    if (!hasAuthCookie) {
      const url = new URL("/auth/signin", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Configure which paths the middleware runs on
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
}
