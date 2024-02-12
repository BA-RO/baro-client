import { useMutation } from '@tanstack/react-query';

import { getLoginURL } from '@api/auth';
import { type OAuthType } from '@api/auth/types';

const useLogin = () =>
  useMutation({
    mutationFn: async (authType: OAuthType) => await getLoginURL(authType),
  });

export default useLogin;
