import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';
import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';

const saveTemporalMemo = async ({
  temporalMemoId,
  memoFolderId,
}: {
  temporalMemoId: number;
  memoFolderId: number;
}) => {
  await http.post(`/temporal-memos/${temporalMemoId}/archive`, {
    memoFolderId,
  });
};

const useSaveTemporalMemo = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });

      showToast({ message: TOAST_MESSAGE.CARD.SAVE });
    },
  });
};

export default useSaveTemporalMemo;
