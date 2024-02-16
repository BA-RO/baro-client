import type { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { useTabsContext } from '..';
import * as styles from '../style.css';

export interface TabsContentProps extends HTMLAttributes<HTMLElement> {
  value: string;
}

const TabsContent = ({
  children,
  value,
  ...props
}: PropsWithChildren<TabsContentProps>) => {
  const { type, selectedTab } = useTabsContext();

  return (
    <>
      {selectedTab === value ? (
        <section
          {...props}
          className={clsx(styles.tabContent({ type }), props.className)}
        >
          {children}
        </section>
      ) : null}
    </>
  );
};

export default TabsContent;
