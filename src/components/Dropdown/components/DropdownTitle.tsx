import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as styles from '@components/Dropdown/style.css';

interface DropdownTitleProps {
  className?: string;
}

const DropdownTitle = ({
  className,
  children,
}: PropsWithChildren<DropdownTitleProps>) => {
  return (
    <>
      <div className={clsx(className, styles.dropdownTitle)}>{children}</div>
      <div className={styles.line} />
    </>
  );
};

export default DropdownTitle;
