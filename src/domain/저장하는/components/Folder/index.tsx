import Link from 'next/link';

import { type Folder } from '@api/memoFolder/types';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import { ROUTES } from '@constants/routes';
import { useModalStore } from '@stores/modal';

import * as styles from './style.css';

const FolderItem = ({ folder }: { folder: Folder }) => {
  const { openModal, setMemoFolderId, setFolderName } = useModalStore();

  const handleEditFolderButtonClick = () => {
    setMemoFolderId(folder.id);
    setFolderName(folder.name);
    openModal('editFolder');
  };

  const handleDeleteFolderButtonClick = () => {
    setMemoFolderId(folder.id);
    openModal('deleteFolder');
  };

  return (
    <div key={folder.id} className={styles.folderButton}>
      <Link
        href={`${ROUTES.ARCHIVE}?folder=${folder.id}`}
        className={styles.folderName}
      >
        {folder.name}
      </Link>
      <MenuDropdown
        onEdit={handleEditFolderButtonClick}
        onDelete={handleDeleteFolderButtonClick}
      />
    </div>
  );
};

export default FolderItem;
