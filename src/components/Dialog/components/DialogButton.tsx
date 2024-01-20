import { type PropsWithChildren } from 'react';

import Button from '@components/Button';
import * as styles from '@components/Dialog/style.css';
import { useDialogContext } from '@hooks/useDialogContext';

interface DialogButtonProps {
  onClick: () => void;
}

const DialogButton = ({
  children,
  onClick,
}: PropsWithChildren<DialogButtonProps>) => {
  const { type } = useDialogContext();

  return (
    <Button className={styles.dialogButton({ type })} onClick={onClick}>
      {children}
    </Button>
  );
};

export default DialogButton;
