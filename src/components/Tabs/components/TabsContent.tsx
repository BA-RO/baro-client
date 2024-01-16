import type { PropsWithChildren } from 'react';

import { useTabsContext } from '../../../hooks/useTabsContext';

export interface TabsContentProps {
  value: string;
}

const TabsContent = ({
  children,
  value,
}: PropsWithChildren<TabsContentProps>) => {
  const { selectedTab } = useTabsContext();

  return <>{selectedTab === value ? children : null}</>;
};

export default TabsContent;
