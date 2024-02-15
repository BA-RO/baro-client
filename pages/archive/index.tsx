import { useRouter } from 'next/router';

import Layout from '@components/Layout';
import ArchiveCardTab from '@domain/저장하는/components/ArchiveCardTab';
import ArchiveFolder from '@domain/저장하는/components/ArchiveFolder';
import useGetMemoFolders from '@queries/useGetMemoFolders';

import * as styles from './style.css';

const DEFAULT_FOLDER = '기본';

const Page = () => {
  const router = useRouter();
  const { data: userFolders } = useGetMemoFolders();

  const folderId = userFolders?.find((folder) => folder.name === DEFAULT_FOLDER)
    ?.id;

  return (
    <Layout>
      <div className={styles.archive}>
        <ArchiveFolder folders={userFolders} />
        <ArchiveCardTab folderId={Number(router.query.folder || folderId)} />
      </div>
    </Layout>
  );
};

export default Page;
