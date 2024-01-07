import type { PropsWithChildren } from 'react';

import Portal from '../Portal';
import * as styles from './style.css';

const ModalContainer = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Portal id="modal-root">
      <div className={styles.dimmed} />
      <div className={styles.modalStyle}>{children}</div>
    </Portal>
  );
};

export default ModalContainer;
