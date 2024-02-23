import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';
import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

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
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });

      showToast({ message: TOAST_MESSAGE.CARD.EDIT });
    },
  });
};

export default useEditTemporalMemo;
