import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';
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
  const queryClient = useQueryClient();

  const { showToast } = useToastStore();

  return useMutation({
    mutationFn: saveTemporalMemo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TemporalMemoQueryKeys.all });
      showToast({ message: '글이 저장됐어요.' });
    },
  });
};

export default useSaveTemporalMemo;
