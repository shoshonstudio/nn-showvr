import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
 
export async function middleware(request: NextRequest) {
  const aPath = request.nextUrl.pathname.split('/')

  const sessionCookie = getSessionCookie(request);

  const allowed = [
    '/',
    '/sign-in',
    '/sign-up',
  ]

  if (!sessionCookie && !allowed.includes(request.nextUrl.pathname) && aPath[1] !== 'api') {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
 
	return NextResponse.next();
}
 
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};