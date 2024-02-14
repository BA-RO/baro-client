import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import clsx from 'clsx';

import Button from '@components/Button';
import * as styles from '@components/Dropdown/style.css';

import { useDropdownContext } from '..';

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownItem = ({
  children,
  className,
  ...props
}: PropsWithChildren<DropdownItemProps>) => {
  const { size } = useDropdownContext();

  return (
    <li className={className}>
      <Button {...props} className={clsx(styles.menuItem({ size }))}>
        {children}
      </Button>
    </li>
  );
};

export default DropdownItem;
