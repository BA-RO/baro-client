import type { PropsWithChildren } from 'react';

import { useTabsContext } from './hooks/useTabsContext';

interface TabsContentProps {
  value: string;
}

const TabsContent = ({
  children,
  value,
}: PropsWithChildren<TabsContentProps>) => {
  const { selectedTab } = useTabsContext();

  return <div>{selectedTab === value ? children : null}</div>;
};

export default TabsContent;
