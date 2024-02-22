import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { patchTemplateCopyCount } from '../api';

const useCopyTemplate = () => {
  const queryClient = useQueryClient();

  const { showToast } = useToastStore();

  return useMutation({
    mutationFn: patchTemplateCopyCount,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['templates'],
      });

      showToast({
        message: TOAST_MESSAGE.CARD.COPY,
      });
    },
  });
};

export default useCopyTemplate;
