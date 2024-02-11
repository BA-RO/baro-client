import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';
import { type TemporalMemoHistory } from '../types';

export const getWriteHistory = async ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const data = await http.get<TemporalMemoHistory[]>(
    `/temporal-memos?startDate=${startDate}&endDate=${endDate}`,
  );

  return data;
};

const useGetWriteHistory = () => {
  const endDate = dayjs().startOf('d').format('YYYY-MM-DD');
  const startDate = dayjs(endDate).subtract(7, 'd').format('YYYY-MM-DD');

  const { data } = useQuery({
    queryKey: TemporalMemoQueryKeys.getHistory(startDate, endDate),
    queryFn: () => getWriteHistory({ startDate, endDate }),
  });

  if (!data) return [];

  return data;
};

export default useGetWriteHistory;
