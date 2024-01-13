import type { PropsWithChildren } from 'react';

import * as styles from '../style.css';

const TabsList = ({ children }: PropsWithChildren) => {
  return <ul className={styles.tabsList}>{children}</ul>;
};

export default TabsList;
