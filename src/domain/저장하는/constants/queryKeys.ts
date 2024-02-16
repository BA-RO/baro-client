const ARCHIVES = 'archives';

export const ARCHIVES_QUERY_KEY = {
  all: [ARCHIVES] as const,
  list: () => [...ARCHIVES_QUERY_KEY.all, 'list'] as const,
  item: (args: unknown[]) => [...ARCHIVES_QUERY_KEY.list(), ...args] as const,
};
