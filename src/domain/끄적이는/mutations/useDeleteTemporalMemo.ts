import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';
import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const deleteTemporalMemo = async (id: number) => {
  await http.delete(`/temporal-memos/${id}`);
};

const useDeleteTemporalMemo = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });

      showToast({ message: TOAST_MESSAGE.CARD.DELETE });
    },
  });
};

export default useDeleteTemporalMemo;
