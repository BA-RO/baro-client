import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import clsx from 'clsx';

import Button from '@components/Button';
import * as styles from '@components/Dropdown/style.css';
import { useDropdownContext } from '@hooks/useDropdownContext';

interface DropdownMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownMenuItem = ({
  children,
  className,
  ...props
}: PropsWithChildren<DropdownMenuItemProps>) => {
  const { size } = useDropdownContext();

  return (
    <li>
      <Button {...props} className={clsx(styles.menuItem({ size }), className)}>
        {children}
      </Button>
    </li>
  );
};

export default DropdownMenuItem;
