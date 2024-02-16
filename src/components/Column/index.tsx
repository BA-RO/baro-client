import { type PropsWithChildren } from 'react';

import * as styles from './style.css';

const Column = ({ children }: PropsWithChildren) => {
  return <ol className={styles.container}>{children}</ol>;
};

export default Column;
