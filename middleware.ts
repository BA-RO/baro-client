import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get('refreshToken');

  if (
    !refreshToken &&
    !request.nextUrl.pathname.startsWith('/intro') &&
    !request.nextUrl.pathname.startsWith('/redirect')
  ) {
    return NextResponse.redirect(new URL('/intro', request.url));
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
