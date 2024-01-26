import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export const HTTP_TIMEOUT = 6000;

export const HTTP_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.ba-ro.co.kr'
    : 'https://dev.api.ba-ro.co.kr';

const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

interface BaroErrorType {
  status?: number;
  message?: string;
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
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
  get: <ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param, options),
  patch: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> =>
    instance.patch(url, param, options),
  put: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> => instance.put(url, param, options),
  delete: <ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> =>
    instance.delete(url),
};
