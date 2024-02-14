import { type PropsWithChildren } from 'react';

import * as styles from '@components/Dropdown/style.css';

const DropdownTitle = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.dropdownTitle}>{children}</div>
      <div className={styles.line} />
    </>
  );
};

export default DropdownTitle;
