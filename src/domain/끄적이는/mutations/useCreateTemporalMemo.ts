import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const createTemporalMemo = async (content: string) => {
  await http.post('/temporal-memos', { content });
};

const useCreateTemporalMemo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });
    },
  });
};

export default useCreateTemporalMemo;
