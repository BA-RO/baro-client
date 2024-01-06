import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev.api.ba-ro.co.kr/',
  headers: { 'content-type': 'application/json' },
});

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
  delete: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
  ): Promise<AxiosResponse<ResponseType>> => instance.delete(url, param),
};
