import { useState } from 'react';

import Tabs from '@components/Tabs';
import { type Folder } from '@domain/저장하는/types';

import ArchiveTabContent from '../ArchiveTabContent';

const ARCHIVE_TAB_LIST = ['전체', '끄적이는', '참고하는'];

interface ArchiveTabProps {
  folderId: Folder['id'];
}

const ArchiveTab = ({ folderId }: ArchiveTabProps) => {
  const [selectedTab, setSelectedTab] = useState(ARCHIVE_TAB_LIST[0]);

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  return (
    <Tabs selectedTab={selectedTab} handleTabSelect={handleTabSelect}>
      <Tabs.List>
        {ARCHIVE_TAB_LIST.map((tabItem) => (
          <Tabs.Trigger key={tabItem} value={tabItem}>
            {tabItem}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <ArchiveTabContent selectedTab={selectedTab} folderId={folderId} />
    </Tabs>
  );
};

export default ArchiveTab;
