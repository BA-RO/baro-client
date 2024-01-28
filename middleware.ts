import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getToken } from '@api/auth';
import { type OAuthType } from '@customTypes/auth';
import { tokenStore } from '@stores/token';

const isAuthType = (authType?: string): authType is OAuthType => {
  if (authType === 'kakao') return true;
  if (authType === 'google') return true;
  if (authType === 'naver') return true;
  return false;
};

export const middleware = async (request: NextRequest) => {
  const re = /^\/redirect\/(naver|google|kakao)$/;

  const { accessToken, setAccessToken } = tokenStore.getState();
  const refreshToken = request.cookies.get('refreshToken');

  if (request.nextUrl.pathname.match(re)) {
    const authType = request.nextUrl.pathname.split('/').pop();
    const code = request.nextUrl.searchParams.get('code');
    if (!isAuthType(authType) || !code) return;

    const { accessToken, refreshToken } =
      (await getToken(authType, code)) || {};
    setAccessToken(accessToken);
    const response = NextResponse.redirect(new URL('/write', request.url));
    response.cookies.set('refreshToken', refreshToken);
    return response;
  }

  if (
    !accessToken &&
    !refreshToken &&
    !request.nextUrl.pathname.startsWith('/intro')
  ) {
    return NextResponse.redirect(new URL('/intro', request.url));
  }
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
