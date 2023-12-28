import type { PropsWithChildren } from 'react';

import { useTabsContext } from './hooks/useTabsContext';
import * as styles from './style.css';

interface TabsTriggerProps {
  value: string;
}

const TabsTrigger = ({
  children,
  value,
}: PropsWithChildren<TabsTriggerProps>) => {
  const { selectedTab, onSelectTab } = useTabsContext();

  return (
    <li>
      <button
        className={styles.tabsTrigger({ isActive: selectedTab === value })}
        onClick={() => onSelectTab(value)}
      >
        {children}
      </button>
    </li>
  );
};

export default TabsTrigger;
