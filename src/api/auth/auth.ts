import { type OAuthType } from '@api/auth/types';
import { http } from '@api/http';

export const getLoginURL = (authType: OAuthType) =>
  http.get<{ url: string }>(`/auth/oauth/${authType}`);

export const getToken = async (authType: OAuthType, code: string) =>
  http.get<{ accessToken: string; refreshToken: string }>(
    `/auth/oauth/sign-in/${authType}?authCode=${code}`,
  );

export const getRenewToken = async (refreshToken: string) =>
  http.get<{ accessToken: string; refreshToken: string }>(
    `/auth/reissue?refreshToken=${refreshToken}`,
  );
