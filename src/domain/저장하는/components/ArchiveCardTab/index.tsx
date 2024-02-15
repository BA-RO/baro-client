import { useState } from 'react';

import Tabs from '@components/Tabs';
import { type Folder } from '@domain/저장하는/types';

import ArchiveCardTabContent from '../ArchiveCardTabContent';

const 저장하는_TAB_LIST = ['전체', '끄적이는', '참고하는'];

interface ArchiveCardProps {
  folderId: Folder['id'];
}

const ArchiveCardTab = ({ folderId }: ArchiveCardProps) => {
  const [selectedTab, setSelectedTab] = useState(저장하는_TAB_LIST[0]);

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  return (
    <Tabs selectedTab={selectedTab} handleTabSelect={handleTabSelect}>
      <Tabs.List>
        {저장하는_TAB_LIST.map((tabItem) => (
          <Tabs.Trigger key={tabItem} value={tabItem}>
            {tabItem}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <ArchiveCardTabContent tabValue={selectedTab} folderId={folderId} />
    </Tabs>
  );
};

export default ArchiveCardTab;
