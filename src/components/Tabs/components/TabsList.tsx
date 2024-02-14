import type { PropsWithChildren } from 'react';

import { useTabsContext } from '..';
import * as styles from '../style.css';

const TabsList = ({ children }: PropsWithChildren) => {
  const { type } = useTabsContext();

  return <ul className={styles.tabsList({ type })}>{children}</ul>;
};

export default TabsList;
