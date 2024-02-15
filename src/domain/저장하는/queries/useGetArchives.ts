import { useQuery } from '@tanstack/react-query';

import archiveApi from '../api';
import { ARCHIVES_QUERY_KEY } from '../constants/queryKeys';

export const useGetArchives = (folderId: number, tabName: string) =>
  useQuery({
    queryKey: ARCHIVES_QUERY_KEY.item([folderId]),
    queryFn: () => archiveApi.get(folderId),
    enabled: !!folderId,
    select: (data) => {
      if (tabName === '전체') return data;
      return data.filter((archive) => archive.tabName === tabName);
    },
  });
