const temporalMemoRootKey = 'TemporalMemo';

export const TemporalMemoQueryKeys = {
  all: [temporalMemoRootKey],
  getHistory: (start: string, end: string) => [
    temporalMemoRootKey,
    'history',
    start,
    end,
  ],
};
