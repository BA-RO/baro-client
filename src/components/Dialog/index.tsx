import { createContext, type PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import DialogButton from '@components/Dialog/components/DialogButton';
import DialogTitle from '@components/Dialog/components/DialogTitle';
import * as styles from '@components/Dialog/style.css';

interface DialogContextProps {
  type: 'small' | 'medium';
}

interface DialogProps {
  className?: string;
  closeDialog: () => void;
}

type DialogRootProps = DialogContextProps & PropsWithChildren<DialogProps>;

export const DialogContext = createContext<DialogContextProps | null>(null);

const DialogRoot = ({
  children,
  type,
  className,
  closeDialog,
}: DialogRootProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isClickOutside =
        dialogRef.current && !dialogRef.current?.contains(e.target as Node);
      isClickOutside && closeDialog();
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [closeDialog]);

  return (
    <DialogContext.Provider
      value={{
        type,
      }}
    >
      <div
        className={clsx(styles.dialogRoot({ type }), className)}
        ref={dialogRef}
      >
        {children}
      </div>
    </DialogContext.Provider>
  );
};

const Dialog = Object.assign(DialogRoot, {
  Title: DialogTitle,
  Button: DialogButton,
});

export default Dialog;
