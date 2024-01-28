import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { tokenStore } from '@stores/token';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    'content-type': 'application/json',
  },
});

interface BaroErrorType {
  status?: number;
  message?: string;
}

instance.interceptors.request.use((config) => {
  const { accessToken } = tokenStore.getState();
  config.headers.Authorization = `Bearer ${accessToken}}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<Error>) => {
    // Network Error 발생 캐치
    if (!error.response) {
      return Promise.reject<BaroErrorType>({
        status: 408,
        message: '현재 네트워크 상태가 불안정합니다. 잠시후 다시 시도해주세요',
      });
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
  delete: <ResponseType>(url: string): Promise<ResponseType> =>
    instance.delete(url),
};
