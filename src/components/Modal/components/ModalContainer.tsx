import type { PropsWithChildren } from 'react';

import { PORTAL_ID } from '@constants/portal';

import Portal from '../../Portal';
import * as styles from '../style.css';

const ModalContainer = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Portal id={PORTAL_ID.MODAL}>
      <div className={styles.dimmed} />
      <div className={styles.modalStyle}>{children}</div>
    </Portal>
  );
};

export default ModalContainer;
