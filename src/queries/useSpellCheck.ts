import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { SPELLCHECK_STATE_MESSAGE } from '@constants/spellCheck';
import { useToastStore } from '@stores/toast';

import spellCheckApi from '../api/spell/spellCheck';
import {
  type SpellCheckParams,
  type SpellCheckResponse,
} from '../api/spell/types';

export const useSpellCheck = (
  options?: UseMutationOptions<
    AxiosResponse<SpellCheckResponse>,
    AxiosError,
    SpellCheckParams
  >,
) => {
  const { showToast } = useToastStore();

  return useMutation({
    ...options,
    mutationFn: (payload) => spellCheckApi.post({ ...payload }),
    onSuccess: () => {
      showToast({ message: SPELLCHECK_STATE_MESSAGE.SUCCESS });
    },
    onError: () => {
      showToast({ message: SPELLCHECK_STATE_MESSAGE.ERROR });
    },
  });
};
