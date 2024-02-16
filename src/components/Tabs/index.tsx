import { createContext, type PropsWithChildren, useContext } from 'react';

import TabsContent from './components/TabsContent';
import TabsList from './components/TabsList';
import TabsTrigger from './components/TabsTrigger';
import * as styles from './style.css';

type TabsType = 'filter' | 'switcher';

interface TabsContextProps {
  type?: TabsType;
  selectedTab: string;
  onSelectTab: (selectedTab: string) => void;
}

export interface TabsRootProps {
  type?: TabsType;
  selectedTab: string;
  handleTabSelect: (selectedTab: string) => void;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

const TabsRoot = ({
  children,
  type = 'filter',
  selectedTab,
  handleTabSelect,
}: PropsWithChildren<TabsRootProps>) => {
  return (
    <TabsContext.Provider
      value={{ type, selectedTab, onSelectTab: handleTabSelect }}
    >
      <div className={styles.tab}>{children}</div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error('useTabsContext hook must be used within a Tabs component');
  }

  return ctx;
};

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
