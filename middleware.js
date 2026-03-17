import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/doctors(.*)",
  "/onboarding(.*)",
  "/doctor(.*)",
  "/admin(.*)",
  "/video-call(.*)",
  "/appointments(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If user is not logged in and tries to access a protected route, redirect to sign-in
  if (!userId && isProtectedRoute(req)) {
    return (await auth()).redirectToSignIn();
  }

  // Handle locale manually since we don't use the [locale] folder
  const response = NextResponse.next();
  const localeCookie = req.cookies.get('NEXT_LOCALE')?.value;

  if (!localeCookie) {
    const acceptLanguage = req.headers.get('accept-language');
    const defaultLocale = 'en';
    let detectedLocale = defaultLocale;

    if (acceptLanguage) {
      if (acceptLanguage.includes('hi')) detectedLocale = 'hi';
      else if (acceptLanguage.includes('mr')) detectedLocale = 'mr';
    }

    response.cookies.set('NEXT_LOCALE', detectedLocale);
  }

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
