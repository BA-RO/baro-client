import { useMutation, useQueryClient } from '@tanstack/react-query';

import archiveApi from '../api';
import { ARCHIVES_QUERY_KEY } from '../constants/queryKeys';

const useDeleteArchives = (folderId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: archiveApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ARCHIVES_QUERY_KEY.item([folderId]),
      });
    },
  });
};

export default useDeleteArchives;
