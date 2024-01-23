import { createContext, type PropsWithChildren } from 'react';

import DialogButton from '@components/Dialog/components/DialogButton';
import DialogTitle from '@components/Dialog/components/DialogTitle';
import * as styles from '@components/Dialog/style.css';

interface DialogContextProps {
  type: 'small' | 'medium';
}

type DialogRootProps = DialogContextProps & PropsWithChildren;

export const DialogContext = createContext<DialogContextProps | null>(null);

const DialogRoot = ({ children, type }: DialogRootProps) => {
  return (
    <DialogContext.Provider
      value={{
        type,
      }}
    >
      <div className={styles.dialogRoot({ type })}>{children}</div>
    </DialogContext.Provider>
  );
};

const Dialog = Object.assign(DialogRoot, {
  Title: DialogTitle,
  Button: DialogButton,
});

export default Dialog;
