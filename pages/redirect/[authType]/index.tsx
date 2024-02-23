import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getToken } from '@api/auth';
import { type OAuthType } from '@api/auth/types';
import Layout from '@components/Layout';
import { ROUTES } from '@constants/routes';
import { STORAGE_KEY } from '@models/storage';
import { saveToken } from '@utils/token';

const Bridge = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { authType, code } = router.query as {
        authType: OAuthType;
        code: string;
      };

      if (!authType || !code) return;

      const { accessToken, refreshToken } =
        (await getToken(authType, code)) || {};

      if (!accessToken || !refreshToken) {
        router.push(ROUTES.LANDING);
        return;
      }

      saveToken({ accessToken, refreshToken });
      localStorage.setItem(STORAGE_KEY.RECENT_LOGIN_TYPE, authType);

      router.replace(`${ROUTES.MAIN}?tab=write`);
    })();
  }, [router.query, router]);

  return <Layout />;
};

export default Bridge;
