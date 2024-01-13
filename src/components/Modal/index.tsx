import { useModalStore } from '@stores/modal';

import DeleteArticle from './modals/DeleteArticle';

const Modal = () => {
  const { type } = useModalStore();

  if (type === 'deleteArticle') return <DeleteArticle />;

  return null;
};

export default Modal;
