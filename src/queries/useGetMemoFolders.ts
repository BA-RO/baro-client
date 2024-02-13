import { useQuery } from '@tanstack/react-query';

import { getMemoFolders } from '@api/memoFolder';

const useGetMemoFolders = () =>
  useQuery({
    queryKey: ['memo-folders'],
    queryFn: getMemoFolders,
    initialData: [],
  });

export default useGetMemoFolders;
