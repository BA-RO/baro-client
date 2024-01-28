import { http } from '@api/http';
import { type OAuthType } from '@customTypes/auth';

export const getLoginURL = (authType: OAuthType) =>
  http.get<{ url: string }>(`/auth/oauth/${authType}`);

export const getToken = async (authType: OAuthType, code: string) => {
  try {
    const res = await fetch(
      `https://dev.api.ba-ro.co.kr/auth/oauth/sign-in/${authType}?authCode=${code}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
        },
      },
    );
    const { accessToken, refreshToken } = await res.json();

    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
  }
};
