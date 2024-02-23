import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { postSaveTemplate } from '../api';

const useSaveTemplate = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToastStore();

  return useMutation({
    mutationFn: postSaveTemplate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['templates'],
      });
      showToast({ message: TOAST_MESSAGE.CARD.SAVE });
    },
  });
};

export default useSaveTemplate;
