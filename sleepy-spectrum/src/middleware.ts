import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isPublicRoute = createRouteMatcher(["/", "/login", "/new-account"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { isAuthenticated, userId } = auth();

  if (!isPublicRoute(context.request) && !isAuthenticated) {
    return context.redirect("/login");
  }

  if (isAuthenticated) {
    return context.redirect("/conversions");
  }

  const url = new URL(context.request.url);
  const path = url.pathname;

  if (isAuthenticated && path === "/") {
    return context.redirect("/login");
  }
});
