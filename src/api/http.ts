import Router from 'next/router';
import axios, { type AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

import { ROUTES } from '@constants/routes';
import { STORAGE_KEY } from '@models/storage';
import { saveToken } from '@utils/token';

import { getRenewToken } from './auth';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

interface BaroErrorType {
  status?: number;
  message?: string;
}

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    // Network Error 발생 캐치
    if (!error.response) {
      return Promise.reject<BaroErrorType>({
        status: 408,
        message: '현재 네트워크 상태가 불안정합니다. 잠시후 다시 시도해주세요',
      });
    }

    if (error.config.url.startsWith('/auth/reissue')) {
      Router.push(ROUTES.LANDING);
      return;
    }

    const tokenRefreshCondition = ['JW01', 'JW02'];

    if (tokenRefreshCondition.includes(error.response.data.errorCode)) {
      const prevRefreshToken = Cookies.get(STORAGE_KEY.REFRESH_TOKEN) as string;

      const { accessToken, refreshToken } =
        (await getRenewToken(prevRefreshToken)) || {};

      if (!accessToken || !refreshToken) {
        Router.push(ROUTES.LANDING);
        return;
      }

      saveToken({ accessToken, refreshToken });
      error.config.headers.Authorization = `Bearer ${accessToken}`;

      return instance.request(error.config);
    }

    // 서버 에러 캐치
    if (error.status && error.status > 500) {
      return Promise.reject<BaroErrorType>({
        status: error.status,
        message: '',
      });
    }

    return Promise.reject(error);
  },
);

export const http = {
  get: <ResponseType>(url: string): Promise<ResponseType> => instance.get(url),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<ResponseType> => instance.post(url, param, options),
  patch: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<ResponseType> => instance.patch(url, param, options),
  put: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<ResponseType> => instance.put(url, param, options),
  delete: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
  ): Promise<ResponseType> => {
    if (!param) return instance.delete(url);
    return instance.delete(url, param);
  },
};
