import { createContext, type PropsWithChildren } from 'react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import DialogButton from '@components/Dialog/components/DialogButton';
import DialogTitle from '@components/Dialog/components/DialogTitle';
import * as styles from '@components/Dialog/style.css';

interface DialogContextProps {
  type?: 'small' | 'medium';
}

type DialogRootProps = RecipeVariants<typeof styles.dialogRoot> &
  PropsWithChildren<unknown>;

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
