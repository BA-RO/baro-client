import { type PropsWithChildren, useCallback, useEffect, useRef } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { PORTAL_ID } from '@constants/portal';
import { useModalStore } from '@stores/modal';

import Portal from '../../Portal';
import * as styles from '../style.css';

const ModalContainer = ({ children }: PropsWithChildren<unknown>) => {
  const dimmedRef = useRef<HTMLDivElement>(null);
  const { closeModal } = useModalStore();

  const onClickDimmed = useCallback(
    (e: MouseEvent) => {
      const isDimmedClick = dimmedRef.current && e.target === dimmedRef.current;
      isDimmedClick && closeModal();
    },
    [dimmedRef, closeModal],
  );

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      event.key === 'Escape' && closeModal();
    },
    [closeModal],
  );

  useEffect(() => {
    document.addEventListener('click', onClickDimmed);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('click', onClickDimmed);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClickDimmed, handleEsc]);

  return (
    <Portal id={PORTAL_ID.MODAL}>
      <div className={styles.dimmed} ref={dimmedRef} />
      <div className={styles.modalStyle}>
        <Button className={styles.closeButton} onClick={closeModal}>
          <Icon icon="close" />
        </Button>
        {children}
      </div>
    </Portal>
  );
};

export default ModalContainer;
