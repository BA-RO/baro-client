import { type PropsWithChildren } from 'react';

import Button from '@components/Button';
import * as styles from '@components/Dropdown/style.css';
import { useDropdownContext } from '@hooks/useDropdownContext';

interface DropdownButtonProps {
  onClick: () => void;
}

const DropdownButton = ({
  children,
  onClick,
}: PropsWithChildren<DropdownButtonProps>) => {
  const { type } = useDropdownContext();

  return (
    <Button className={styles.dropdownButton({ type })} onClick={onClick}>
      {children}
    </Button>
  );
};

export default DropdownButton;
