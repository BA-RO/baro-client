import { useMutation, useQueryClient } from '@tanstack/react-query';

import archiveApi from '../api';
import { ARCHIVES_QUERY_KEY } from '../constants/queryKeys';

const useUpdateArchives = (folderId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: archiveApi.patch,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ARCHIVES_QUERY_KEY.item([folderId]),
      });
    },
  });
};

export default useUpdateArchives;
