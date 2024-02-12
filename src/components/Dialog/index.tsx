import { createContext, forwardRef, type PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import DialogButton from '@components/Dialog/components/DialogButton';
import DialogTitle from '@components/Dialog/components/DialogTitle';
import * as styles from '@components/Dialog/style.css';
import { useModalStore } from '@stores/modal';

interface DialogContextProps {
  type: 'small' | 'medium';
}

interface DialogProps {
  className?: string;
  closeDialog: () => void;
}

type DialogRootProps = DialogContextProps & PropsWithChildren<DialogProps>;

export const DialogContext = createContext<DialogContextProps | null>(null);

const DialogRoot = forwardRef<HTMLButtonElement, DialogRootProps>(
  ({ children, type, className, closeDialog }, ref) => {
    const { type: modalType } = useModalStore();

    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (modalType || typeof ref === 'function') return;

        const isClickOutside =
          dialogRef.current &&
          !dialogRef.current?.contains(e.target as Node) &&
          !ref?.current?.contains(e.target as Node);

        isClickOutside && closeDialog();
      };

      document.addEventListener('click', handleClickOutside, true);

      return () =>
        document.removeEventListener('click', handleClickOutside, true);
    }, [closeDialog, modalType, ref]);

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
  },
);

DialogRoot.displayName = 'DialogRoot';

const Dialog = Object.assign(DialogRoot, {
  Title: DialogTitle,
  Button: DialogButton,
});

export default Dialog;
