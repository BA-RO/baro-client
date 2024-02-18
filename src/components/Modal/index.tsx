import DeleteFolderModal from '@domain/저장하는/components/DeleteFolderModal';
import { useModalStore } from '@stores/modal';

import DeleteArticle from './modals/DeleteArticle';
import EditFolder from './modals/EditFolder';
import Login from './modals/Login';
import MakeFolder from './modals/MakeFolder';

const Modal = () => {
  const { type } = useModalStore();

  if (type === 'deleteArticle') return <DeleteArticle />;

  if (type === 'login') return <Login />;

  if (type === 'makeFolder') return <MakeFolder />;

  if (type === 'editFolder') return <EditFolder />;

  if (type === 'deleteFolder') return <DeleteFolderModal />;

  return null;
};

export default Modal;
