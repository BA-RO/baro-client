import { createContext, type PropsWithChildren, useState } from 'react';

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

export default TabsRoot;
