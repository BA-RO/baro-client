import Cookies from 'js-cookie';

interface SaveTokenParams {
  accessToken: string;
  refreshToken: string;
}

export const saveToken = ({ accessToken, refreshToken }: SaveTokenParams) => {
  localStorage.setItem('accessToken', accessToken);
  Cookies.set('refreshToken', refreshToken);
};
