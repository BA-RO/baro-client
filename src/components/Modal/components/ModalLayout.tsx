import { type HTMLAttributes, type PropsWithChildren } from 'react';

import * as styles from '../style.css';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalHeader = ({
  children,
  ...props
}: PropsWithChildren<ModalProps>) => {
  return (
    <header {...props} className={styles.modalHeader}>
      {children}
    </header>
  );
};

export const ModalBody = ({
  children,
  ...props
}: PropsWithChildren<ModalProps>) => {
  return (
    <main {...props} className={styles.modalBody}>
      {children}
    </main>
  );
};

export const ModalFooter = ({
  children,
  ...props
}: PropsWithChildren<ModalProps>) => {
  return <footer {...props}>{children}</footer>;
};
