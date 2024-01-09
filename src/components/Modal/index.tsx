import { useModalStore } from '@/src/stores/modalStore';

import DeleteArticle from './components/DeleteArticle';

const Modal = () => {
  const { type } = useModalStore();

  if (type === 'deleteArticle') return <DeleteArticle />;

  return null;
};

export default Modal;
