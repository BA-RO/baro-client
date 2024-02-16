import { useRouter } from 'next/router';

import useGetMemoFolders from '@queries/useGetMemoFolders';

import ArchiveFolder from '../ArchiveFolder';
import ArchiveTab from '../ArchiveTab';
import * as styles from './style.css';

const DEFAULT_FOLDER = '기본';

const Archive = () => {
  const router = useRouter();
  const { data: userFolders } = useGetMemoFolders();

  const folderId = userFolders.find((folder) => folder.name === DEFAULT_FOLDER)
    ?.id;

  return (
    <div className={styles.archive}>
      <ArchiveFolder folders={userFolders} />
      <ArchiveTab folderId={Number(router.query.folder || folderId)} />
    </div>
  );
};

export default Archive;
