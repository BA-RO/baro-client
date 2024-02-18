import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToastStore } from '@stores/toast';

import { patchMemoFolders } from '..';
import { MEMO_FOLDERS_KEY } from '../constants/queryKey';

const useUpdateMemoFolder = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchMemoFolders,
    onSuccess: () => {
      showToast({ message: '폴더 이름이 수정되었어요' });

      queryClient.invalidateQueries({
        queryKey: MEMO_FOLDERS_KEY.all,
      });
    },
  });
};

export default useUpdateMemoFolder;
