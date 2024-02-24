import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const deleteArchive = async (id: number) => {
  await http.delete(`/temporal-memos/${id}/archive`);
};

const useDeleteArchive = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArchive,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });
    },
  });
};

export default useDeleteArchive;
