import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const editTemporalMemo = async ({
  id,
  content,
}: {
  id: number;
  content: string;
}) => {
  await http.patch(`/temporal-memos/${id}`, { content });
};

const useEditTemporalMemo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });
    },
  });
};

export default useEditTemporalMemo;
