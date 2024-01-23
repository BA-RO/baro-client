import { type ReactNode } from 'react';

import Tabs from '@components/Tabs';

import * as styles from './style.css';

interface WritePageTabProps {
  write: ReactNode;
  template: ReactNode;
}

const WritePageTab = ({ write }: WritePageTabProps) => {
  return (
    <>
      <Tabs type="switcher" defaultValue="끄적이는">
        <div className={styles.header}>
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
        </section>
      </Tabs>
    </>
  );
};

export default WritePageTab;
