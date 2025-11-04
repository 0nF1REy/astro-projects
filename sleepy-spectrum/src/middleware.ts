import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isPublicRoute = createRouteMatcher(["/login", "/new-account"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { isAuthenticated } = auth();
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (!isPublicRoute(context.request) && !isAuthenticated) {
    return context.redirect("/login");
  }

  if (
    isAuthenticated &&
    (path === "/login" || path === "/new-account" || path === "/")
  ) {
    return context.redirect("/conversions");
  }
});
