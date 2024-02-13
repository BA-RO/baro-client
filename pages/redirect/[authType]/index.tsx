import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getToken } from '@api/auth/auth';
import { type OAuthType } from '@api/auth/types';
import { ROUTES } from '@constants/routes';
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

      router.replace(ROUTES.MAIN);
    })();
  }, [router.query, router]);

  return <></>;
};

export default Bridge;
