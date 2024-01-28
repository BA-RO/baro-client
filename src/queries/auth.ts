import { useMutation } from '@tanstack/react-query';

import { getLoginURL } from '../api/auth';
import { type OAuthType } from '../customTypes/auth';

export const useLogin = () =>
  useMutation({
    mutationFn: async (authType: OAuthType) => await getLoginURL(authType),
  });
