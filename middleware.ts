import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware(); // Correctly export as default

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
