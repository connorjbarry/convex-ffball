import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/login"]);
const isLandingPage = createRouteMatcher(["/"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  if (
    !isLandingPage(request) &&
    !isSignInPage(request) &&
    !(await convexAuth.isAuthenticated())
  ) {
    return nextjsMiddlewareRedirect(request, "/login");
  }

  if (isSignInPage(request) && (await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, "/dashboard");
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
