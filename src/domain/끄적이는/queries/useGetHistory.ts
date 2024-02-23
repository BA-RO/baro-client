import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { http } from '@api/http';

import { TemporalMemoQueryKeys } from '../constants/queryKeys';
import { type TemporalMemoHistory } from '../types';

const DATE_FORMAT = 'YYYY-MM-DD';

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
  const endDate = dayjs().startOf('d').format(DATE_FORMAT);
  const startDate = dayjs(endDate).subtract(7, 'd').format(DATE_FORMAT);

  const { data, isLoading } = useQuery({
    queryKey: TemporalMemoQueryKeys.getHistory(startDate, endDate),
    queryFn: () => getWriteHistory({ startDate, endDate }),
    select: (data) => {
      return {
        todayMemos: data.filter(
          (history) =>
            dayjs(history.createdAt).format(DATE_FORMAT) ===
            dayjs().format(DATE_FORMAT),
        ),
        history: data
          .filter(
            (history) =>
              dayjs(history.createdAt).format(DATE_FORMAT) !==
              dayjs().format(DATE_FORMAT),
          )
          .reverse(),
      };
    },
  });

  if (!data) return { data: { todayMemos: [], history: [] }, isLoading: true };

  return { data, isLoading };
};

export default useGetWriteHistory;
