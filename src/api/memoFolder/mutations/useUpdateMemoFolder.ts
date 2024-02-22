import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { patchMemoFolders } from '..';
import { MEMO_FOLDERS_KEY } from '../constants/queryKey';

const useUpdateMemoFolder = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchMemoFolders,
    onSuccess: () => {
      showToast({ message: TOAST_MESSAGE.MEMOFOLDER.UPDATE });

      queryClient.invalidateQueries({
        queryKey: MEMO_FOLDERS_KEY.all,
      });
    },
  });
};

export default useUpdateMemoFolder;
