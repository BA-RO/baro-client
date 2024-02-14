import { type ReactNode } from 'react';

import Tabs from '@components/Tabs';

import * as styles from './style.css';

interface MainPageTabProps {
  write: ReactNode;
  refer: ReactNode;
  selectedTab: string;
  handleTabSelect: (selectedTab: string) => void;
}

const MainPageTab = ({
  write,
  refer,
  selectedTab,
  handleTabSelect,
}: MainPageTabProps) => {
  return (
    <Tabs
      type="switcher"
      selectedTab={selectedTab}
      handleTabSelect={handleTabSelect}
    >
      <div className={styles.tab}>
        <Tabs.List>
          <Tabs.Trigger
            value="끄적이는"
            icon={{ default: 'pencilDefault', active: 'pencilActive' }}
          >
            끄적이는
          </Tabs.Trigger>
          <Tabs.Trigger
            value="참고하는"
            icon={{ default: 'templateDefault', active: 'templateActive' }}
          >
            참고하는
          </Tabs.Trigger>
        </Tabs.List>
      </div>

      <section>
        <Tabs.Content value="끄적이는">{write}</Tabs.Content>
        <Tabs.Content value="참고하는">{refer}</Tabs.Content>
      </section>
    </Tabs>
  );
};

export default MainPageTab;
