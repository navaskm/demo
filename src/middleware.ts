import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const isOrderRoute = createRouteMatcher(["/components/OrderPage"])
const isCheckoutRoute = createRouteMatcher(["/components/CheckoutPage"])

export default clerkMiddleware(async(auth, request)=>{
  if(isOrderRoute(request)) await auth.protect();
  if(isCheckoutRoute(request)) await auth.protect();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};