import { useModalStore } from '@stores/modal';

import DeleteArticle from './modals/DeleteArticle';
import Login from './modals/Login';

const Modal = () => {
  const { type } = useModalStore();

  if (type === 'deleteArticle') return <DeleteArticle />;

  if (type === 'login') return <Login />;

  return null;
};

export default Modal;
