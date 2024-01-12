import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useModalStore } from '@stores/modal';
import { COLORS } from '@styles/tokens';

import ModalContainer from '../components/ModalContainer';
import * as styles from '../style.css';

const DeleteArticle = () => {
  const { closeModal } = useModalStore();

  return (
    <ModalContainer>
      <strong className={styles.title}>해당 글을 삭제할까요?</strong>
      <p className={styles.body}>
        {'삭제한 글은 복구할 수 없어요!\n삭제하시겠어요'}
      </p>
      <div>
        <button
          type="button"
          className={styles.button}
          style={assignInlineVars({
            [styles.buttonColor]: COLORS['Grey/600'],
            [styles.buttonBackgroundColor]: COLORS['Grey/150'],
          })}
          onClick={closeModal}
        >
          취소
        </button>
        <button
          type="button"
          className={styles.button}
          style={assignInlineVars({
            [styles.buttonColor]: COLORS['Grey/White'],
            [styles.buttonBackgroundColor]: COLORS['Blue/Default'],
          })}
        >
          만들기
        </button>
      </div>
    </ModalContainer>
  );
};

export default DeleteArticle;
