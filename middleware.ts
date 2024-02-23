import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ROUTES } from '@constants/routes';
import { STORAGE_KEY } from '@models/storage';

export const middleware = async (request: NextRequest) => {
  const refreshToken = request.cookies.get(STORAGE_KEY.REFRESH_TOKEN);

  if (request.nextUrl.pathname.startsWith('/terms')) return;

  if (refreshToken?.value && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(
      new URL(`${ROUTES.MAIN}?tab=write`, request.url),
    );
  }

  if (
    !refreshToken &&
    request.nextUrl.pathname !== '/' &&
    !request.nextUrl.pathname.startsWith('/redirect')
  ) {
    return NextResponse.redirect(new URL(ROUTES.LANDING, request.url));
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
