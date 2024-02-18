import Cookies from 'js-cookie';

import { STORAGE_KEY } from '@models/storage';

interface SaveTokenParams {
  accessToken: string;
  refreshToken: string;
}

export const saveToken = ({ accessToken, refreshToken }: SaveTokenParams) => {
  localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, accessToken);
  Cookies.set(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
};
