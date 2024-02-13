import { useMutation } from '@tanstack/react-query';

import { postMemoFolders } from '@api/memoFolder';

const usePostMemoFolders = () =>
  useMutation({
    mutationFn: postMemoFolders,
  });

export default usePostMemoFolders;
