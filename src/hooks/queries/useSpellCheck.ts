import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { type AxiosError, type AxiosResponse } from 'axios';

import { SPELLCHECK_STATE_MESSAGE } from '@constants/spellCheck';
import { useToastStore } from '@stores/toast';

import spellCheckApi from '../../api/끄적이는/spellCheck';
import {
  type SpellCheckParams,
  type SpellCheckResponse,
} from '../../types/spellCheck';

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
