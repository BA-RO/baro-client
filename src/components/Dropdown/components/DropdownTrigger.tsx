import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type PropsWithChildren,
} from 'react';

import Button from '@components/Button';

import { useDropdownContext } from '..';
import * as styles from '../style.css';

interface DropdownTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownTrigger = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<DropdownTriggerProps>) => {
  const { onToggle } = useDropdownContext();

  const handleDropdownTriggerClick = (e: MouseEvent<HTMLButtonElement>) => {
    onToggle();
    onClick?.(e);
  };

  return (
    <Button
      {...props}
      className={styles.trigger}
      onClick={handleDropdownTriggerClick}
    >
      {children}
    </Button>
  );
};

export default DropdownTrigger;
