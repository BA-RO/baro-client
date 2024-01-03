import ModalContainer from '../ModalContainer';

const DeleteArticle = () => {
  return (
    <ModalContainer
      title="해당 글을 삭제할까요?"
      secondButtonProps={{
        text: '삭제하기',
        onClick: () => {},
      }}
    >
      {'삭제한 글은 복구할 수 없어요!\n삭제하시겠어요'}
    </ModalContainer>
  );
};

export default DeleteArticle;
