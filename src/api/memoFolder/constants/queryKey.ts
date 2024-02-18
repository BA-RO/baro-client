const MEMO_FOLDERS = 'memo-folders';

export const MEMO_FOLDERS_KEY = {
  all: [MEMO_FOLDERS] as const,
  list: () => [...MEMO_FOLDERS_KEY.all, 'list'] as const,
  item: (args: unknown[]) => [...MEMO_FOLDERS_KEY.list(), ...args] as const,
};
