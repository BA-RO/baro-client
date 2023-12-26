import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import * as styles from './Tab.css';
import type { ROUTES } from '@/src/constants/route';

interface TabItemProps {
  path: (typeof ROUTES)[keyof typeof ROUTES];
}

const Tab = ({ children }: PropsWithChildren) => {
  return <ul className={styles.tab}>{children}</ul>;
};

const TabItem = ({ children, path }: PropsWithChildren<TabItemProps>) => {
  const pathname = usePathname();

  return (
    <li
      className={styles.tabItem({
        isActive: path === pathname,
      })}
    >
      <Link href={path}>{children}</Link>
    </li>
  );
};

const List = Tab;
const Item = TabItem;

export { List, Item };
