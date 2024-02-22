import { useRouter } from 'next/router';

import useDeleteMemoFolder from '@api/memoFolder/mutations/useDeleteMemoFolder';
import Button from '@components/Button';
import ModalContainer from '@components/Modal/components/ModalContainer';
import { ROUTES } from '@constants/routes';
import { useModalStore } from '@stores/modal';

import * as styles from './style.css';

const DeleteFolderModal = () => {
  const router = useRouter();

  const { closeModal, memoFolderId } = useModalStore();
  const { mutate: deleteFolder } = useDeleteMemoFolder();

  const handleAllFolderDelete = () => {
    deleteFolder({ memoFolderId, deleteAllMemo: true });
    closeModal();
  };

  const handleCardMove = () => {
    deleteFolder({ memoFolderId, deleteAllMemo: false });
    closeModal();

    router.push(ROUTES.ARCHIVE);
  };

  return (
    <ModalContainer>
      <ModalContainer.Header>
        <strong>해당 폴더를 삭제할까요?</strong>
      </ModalContainer.Header>
      <ModalContainer.Body>
        <p>
          {`삭제한 폴더는 복구할 수 없어요!\n폴더 내 문장과 템플릿은 어떻게 할까요?`}
        </p>
      </ModalContainer.Body>
      <ModalContainer.Footer className={styles.buttonGroup}>
        <Button
          state="default"
          size="M"
          className={styles.button}
          onClick={handleAllFolderDelete}
        >
          모두 삭제하기
        </Button>
        <Button state="enabled" size="M" onClick={handleCardMove}>
          기본 폴더로 이동하기
        </Button>
      </ModalContainer.Footer>
    </ModalContainer>
  );
};

export default DeleteFolderModal;
