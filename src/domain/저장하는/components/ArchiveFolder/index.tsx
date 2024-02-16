import Link from 'next/link';

import Button from '@components/Button';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';
import { type Folder } from '@domain/저장하는/types';
import useGetMyProfile from '@queries/useGetMyProfile';

import * as styles from './style.css';

interface FolderProps {
  folders?: Folder[];
}

const ArchiveFolder = ({ folders }: FolderProps) => {
  const { data } = useGetMyProfile();

  return (
    <aside className={styles.folder}>
      <div className={styles.userFolder}>
        <span>{data?.nickname}님의 폴더</span>
        <span className={styles.tag}>기본</span>
      </div>
      {folders
        ? folders.map((folder) => (
            <div key={folder.id} className={styles.folderButton}>
              <Link
                href={`${ROUTES.ARCHIVE}?folder=${folder.id}`}
                className={styles.folderName}
              >
                {folder.name}
              </Link>
              <MenuDropdown
                onEdit={() => console.log('수정')}
                onDelete={() => console.log('삭제')}
              />
            </div>
          ))
        : null}
      {}
      <Button className={styles.createFolderButton}>
        <Icon icon="add" width={20} height={20} />
        <span>새 폴더 만들기</span>
      </Button>
    </aside>
  );
};

export default ArchiveFolder;
