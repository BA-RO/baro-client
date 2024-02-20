import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';
import { type Folder } from '@domain/저장하는/types';
import useGetMyProfile from '@queries/useGetMyProfile';
import { useModalStore } from '@stores/modal';

import FolderItem from '../Folder';
import * as styles from './style.css';

interface ArchiveFolderProps {
  folders: Folder[];
}

const ArchiveFolder = ({ folders }: ArchiveFolderProps) => {
  const router = useRouter();

  const { openModal } = useModalStore();
  const { data } = useGetMyProfile();

  return (
    <aside className={styles.folder}>
      {folders.map((folder) =>
        folder.name === '기본' ? (
          <Link
            key={folder.id}
            href={`${ROUTES.ARCHIVE}?folder=${folder.id}`}
            className={styles.userFolder({
              isActive:
                router.asPath === `${ROUTES.ARCHIVE}` ||
                router.asPath === `${ROUTES.ARCHIVE}?folder=${folder.id}`,
            })}
          >
            <span>{data?.nickname}님의 폴더</span>
            <span className={styles.tag}>기본</span>
          </Link>
        ) : (
          <FolderItem key={folder.id} folder={folder} />
        ),
      )}
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
