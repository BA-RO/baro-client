import { type ReactNode } from 'react';

import Tabs from '@components/Tabs';
import Tooltip from '@components/Tooltip';

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
          <Tooltip hasArrow>
            <Tooltip.Trigger>
              <Tabs.Trigger
                value="write"
                icon={{ default: 'pencilDefault', active: 'pencilActive' }}
              >
                끄적이는
              </Tabs.Trigger>
            </Tooltip.Trigger>
            <Tooltip.Content>문장을 끄적이고 검사해봐요</Tooltip.Content>
          </Tooltip>
          <Tooltip hasArrow>
            <Tooltip.Trigger>
              <Tabs.Trigger
                value="refer"
                icon={{ default: 'templateDefault', active: 'templateActive' }}
              >
                참고하는
              </Tabs.Trigger>
            </Tooltip.Trigger>
            <Tooltip.Content>문장 템플릿을 찾아봐요</Tooltip.Content>
          </Tooltip>
        </Tabs.List>
      </div>

      <section className={styles.tabWrapper}>
        <Tabs.Content value="write">{write}</Tabs.Content>
        <Tabs.Content value="refer">{refer}</Tabs.Content>
      </section>
    </Tabs>
  );
};

export default MainPageTab;
