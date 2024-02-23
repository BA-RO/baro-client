import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import archiveApi from '../api';
import { ARCHIVES_QUERY_KEY } from '../constants/queryKeys';

const useDeleteArchives = (folderId: number) => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: archiveApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ARCHIVES_QUERY_KEY.item([folderId]),
      });

      showToast({ message: TOAST_MESSAGE.CARD.DELETE });
    },
  });
};

export default useDeleteArchives;
