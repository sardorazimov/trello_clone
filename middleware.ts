import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
 // server action
});

export const config = {
  
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};