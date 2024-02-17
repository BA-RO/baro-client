import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToastStore } from '@stores/toast';

import { deleteMemoFolders } from '..';
import { MEMO_FOLDERS_KEY } from '../constants/queryKey';

const useDeleteMemoFolder = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMemoFolders,
    onSuccess: () => {
      showToast({ message: '선택한 폴더가 삭제되었어요' });

      queryClient.invalidateQueries({
        queryKey: MEMO_FOLDERS_KEY.all,
      });
    },
  });
};

export default useDeleteMemoFolder;
