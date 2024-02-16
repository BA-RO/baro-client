import { useMutation, useQueryClient } from '@tanstack/react-query';

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
      showToast({ message: '글이 저장됐어요.' });
    },
  });
};

export default useSaveTemplate;
