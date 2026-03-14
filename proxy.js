import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const locales = ['en', 'hi', 'mr'];
const defaultLocale = 'en';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/doctors(.*)",
  "/onboarding(.*)",
  "/doctor(.*)",
  "/admin(.*)",
  "/video-call(.*)",
  "/appointments(.*)",
]);

export const proxy = (req, event) => {
  return clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();

    // Locale handling
    let locale = req.cookies.get('NEXT_LOCALE')?.value;
    if (!locale || !locales.includes(locale)) {
      locale = defaultLocale;
    }

    // If user is not logged in and tries to access a protected route, redirect to sign-in
    if (!userId && isProtectedRoute(req)) {
       return (await auth()).redirectToSignIn();
    }

    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', locale);
    return response;
  })(req, event);
};

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
