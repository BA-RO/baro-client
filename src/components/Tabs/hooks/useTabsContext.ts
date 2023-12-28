import { useContext } from 'react';

import { TabsContext } from '../TabsRoot';

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error('useTabsContext hook must be used within a Tabs component');
  }

  return ctx;
};
