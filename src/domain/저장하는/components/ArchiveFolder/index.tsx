import Button from '@components/Button';
import Icon from '@components/Icon';
import { type Folder } from '@domain/저장하는/types';
import useGetMyProfile from '@queries/useGetMyProfile';
import { useModalStore } from '@stores/modal';

import FolderItem from '../Folder';
import * as styles from './style.css';

interface ArchiveFolderProps {
  folders: Folder[];
}

const ArchiveFolder = ({ folders }: ArchiveFolderProps) => {
  const { openModal } = useModalStore();
  const { data } = useGetMyProfile();

  return (
    <aside className={styles.folder}>
      <div className={styles.userFolder}>
        <span>{data?.nickname}님의 폴더</span>
        <span className={styles.tag}>기본</span>
      </div>
      {folders.map((folder) => (
        <FolderItem key={folder.id} folder={folder} />
      ))}
      <Button
        className={styles.createFolderButton}
        onClick={() => openModal('makeFolder')}
      >
        <Icon icon="add" width={20} height={20} />
        <span>새 폴더 만들기</span>
      </Button>
    </aside>
  );
};

export default ArchiveFolder;
