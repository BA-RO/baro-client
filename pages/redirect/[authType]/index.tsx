import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

import { getToken } from '@api/auth/auth';
import { type OAuthType } from '@api/auth/types';
import { ROUTES } from '@constants/routes';

const Bridge = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { authType, code } = router.query as {
        authType: OAuthType;
        code: string;
      };

      if (!authType || !code) return;

      const data = await getToken(authType, code);

      localStorage.setItem('accessToken', data.accessToken);
      Cookies.set('refreshToken', data.refreshToken);

      router.events.on('routeChangeStart', (url) => {
        window.location.href = url;
      });

      router.replace(ROUTES.끄적이는);
    })();
  }, [router.query, router]);

  return <></>;
};

export default Bridge;
