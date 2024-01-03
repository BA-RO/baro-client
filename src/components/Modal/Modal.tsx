import { useModal } from '@/src/stores/modalStore';

import DeleteArticle from './components/DeleteArticle';

const Modal = () => {
  const { type } = useModal();

  if (type === 'deleteArticle') return <DeleteArticle />;

  return null;
};

export default Modal;
