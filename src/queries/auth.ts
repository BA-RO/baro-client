import { useMutation } from '@tanstack/react-query';

import { getLoginURL } from '@api/auth/auth';
import { type OAuthType } from '@api/auth/types';

export const useLogin = () =>
  useMutation({
    mutationFn: async (authType: OAuthType) => await getLoginURL(authType),
  });
