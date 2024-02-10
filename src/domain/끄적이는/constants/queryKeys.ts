export const TemporalMemoQueryKeys = {
  getHistory: (start: string, end: string) => [
    'TemporalMemo',
    'history',
    start,
    end,
  ],
};
