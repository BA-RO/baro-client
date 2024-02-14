import { useModalStore } from '@stores/modal';

import DeleteArticle from './modals/DeleteArticle';
import Login from './modals/Login';
import MakeFolder from './modals/MakeFolder';

const Modal = () => {
  const { type } = useModalStore();

  if (type === 'deleteArticle') return <DeleteArticle />;

  if (type === 'login') return <Login />;

  if (type === 'makeFolder') return <MakeFolder />;

  return null;
};

export default Modal;
