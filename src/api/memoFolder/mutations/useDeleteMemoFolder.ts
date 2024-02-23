import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import { deleteMemoFolders } from '..';
import { MEMO_FOLDERS_KEY } from '../constants/queryKey';

const useDeleteMemoFolder = () => {
  const { showToast } = useToastStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMemoFolders,
    onSuccess: (data, variables) => {
      showToast({
        message: variables.deleteAllMemo
          ? TOAST_MESSAGE.MEMOFOLDER.DELETE
          : TOAST_MESSAGE.MEMOFOLDER.MOVE_TO_DEFAULT_FOLDER,
      });

      queryClient.invalidateQueries({
        queryKey: MEMO_FOLDERS_KEY.all,
      });
    },
  });
};

export default useDeleteMemoFolder;
