import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { domainParser, isProtectedRoute } from '~/helpers/utils';

const handler = async (req: NextRequest) => {
  const { path } = domainParser(req);
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // Verify token with fetch if needed.

  if (
    !token &&
    path !== '/auth/login' &&
    path !== '/auth/register' &&
    isProtectedRoute(path)
  ) {
    return NextResponse.redirect(
      new URL(`/auth/login?callback=${encodeURI(path)}`, req.url)
    );
  }
  if (token && path.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/console', req.url));
  }
};

export default handler;

export const config = {
  matcher: ['/((?!api/|_next/|_static|_vercel|favicon.ico|sitemap.xml).*)'],
};
