import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { type AxiosError } from 'axios';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import spellCheckApi from '../api/spell';
import {
  type SpellCheckParams,
  type SpellCheckResponse,
} from '../api/spell/types';

const usePostSpellCheck = (
  options?: UseMutationOptions<
    SpellCheckResponse,
    AxiosError,
    SpellCheckParams
  >,
) => {
  const { showToast } = useToastStore();

  return useMutation({
    ...options,
    mutationFn: (payload) => spellCheckApi.post({ ...payload }),
    onSuccess: () => {
      showToast({ message: TOAST_MESSAGE.SPELLCHECK.SUCCESS });
    },
    onError: () => {
      showToast({ message: TOAST_MESSAGE.SPELLCHECK.ERROR });
    },
  });
};

export default usePostSpellCheck;
