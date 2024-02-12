import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const deleteTemporalMemo = async (id: number) => {
  await http.delete(`/temporal-memos/${id}`);
};

const useDeleteTemporalMemo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });
    },
  });
};

export default useDeleteTemporalMemo;
