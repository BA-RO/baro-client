import type { PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useModalStore } from '@/src/stores/modalStore';
import { COLORS } from '@/src/styles/tokens';

import * as styles from './style.css';

interface ModalButtonProps {
  text?: string;
  backgroundColor?: string;
  color?: string;
  onClick: () => void;
}

interface ModalContainerProps {
  title: string;
  firstButtonProps?: ModalButtonProps;
  secondButtonProps?: ModalButtonProps;
}

const ModalContainer = ({
  children,
  title,
  firstButtonProps,
  secondButtonProps,
}: PropsWithChildren<ModalContainerProps>) => {
  const { closeModal } = useModalStore();

  const {
    text: firstButtonText = '취소',
    color: firstButtonColor = COLORS['Grey/600'],
    backgroundColor: firstButtonBackgroundColor = COLORS['Grey/150'],
    onClick: onClickFirstButton = closeModal,
  } = firstButtonProps || {};

  const {
    text: secondButtonText = '만들기',
    color: secondButtonColor = COLORS['Grey/White'],
    backgroundColor: secondButtonBackgroundColor = COLORS['Blue/Default'],
  } = secondButtonProps || {};

  return (
    <>
      <div className={styles.dimmed} />
      <div className={styles.modalStyle}>
        <strong className={styles.title}>{title}</strong>
        {typeof children === 'string' ? (
          <p className={styles.body}>{children}</p>
        ) : (
          <>{children}</>
        )}
        <div>
          <button
            type="button"
            className={styles.button}
            style={assignInlineVars({
              [styles.buttonColor]: firstButtonColor,
              [styles.buttonBackgroundColor]: firstButtonBackgroundColor,
            })}
            onClick={onClickFirstButton}
          >
            {firstButtonText}
          </button>
          <button
            type="button"
            className={styles.button}
            style={assignInlineVars({
              [styles.buttonColor]: secondButtonColor,
              [styles.buttonBackgroundColor]: secondButtonBackgroundColor,
            })}
          >
            {secondButtonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalContainer;
