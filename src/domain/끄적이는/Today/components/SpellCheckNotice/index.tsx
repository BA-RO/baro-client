import { type PropsWithChildren } from 'react';

import Icon from '@components/Icon';

import * as styles from './style.css';

const SpellCheckNotice = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.notice}>
      <Icon icon="complete" width={18} height={18} />
      <span>{children}</span>
    </div>
  );
};

export default SpellCheckNotice;
