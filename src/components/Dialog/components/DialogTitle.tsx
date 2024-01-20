import { type PropsWithChildren } from 'react';

import * as styles from '@components/Dialog/style.css';

const DialogTitle = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <div className={styles.dialogTitle}>{children}</div>
      <div className={styles.line} />
    </>
  );
};

export default DialogTitle;
