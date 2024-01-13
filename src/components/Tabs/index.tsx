import { createContext, type PropsWithChildren, useState } from 'react';

import TabsContent from './components/TabsContent';
import TabsList from './components/TabsList';
import TabsTrigger from './components/TabsTrigger';

interface TabsContextProps {
  selectedTab: string;
  onSelectTab: (selectedTab: string) => void;
}

export interface TabsRootProps {
  defaultValue: string;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

const TabsRoot = ({
  children,
  defaultValue,
}: PropsWithChildren<TabsRootProps>) => {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  return (
    <TabsContext.Provider value={{ selectedTab, onSelectTab: handleTabSelect }}>
      {children}
    </TabsContext.Provider>
  );
};

const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
