import Column from '@components/Column';
import Spinner from '@components/Loading/Spinner';
import Tabs from '@components/Tabs';
import { useGetArchives } from '@domain/저장하는/queries/useGetArchives';
import parserColumn from '@utils/parserColumn';

import ArchivedCard from '../ArchivedCard';
import NotFoundArchiveCard from '../NotFoundArchiveCard';
import * as styles from './style.css';

interface ArchiveTabContentProps {
  selectedTab: string;
  folderId: number;
}

const ArchiveTabContent = ({
  selectedTab,
  folderId,
}: ArchiveTabContentProps) => {
  const { data: archiveCards } = useGetArchives(folderId, selectedTab);

  if (!archiveCards) {
    return (
      <Tabs.Content value={selectedTab}>
        <Spinner />
      </Tabs.Content>
    );
  }

  return (
    <Tabs.Content value={selectedTab} className={styles.tabContent}>
      {archiveCards.length ? (
        parserColumn(archiveCards).map((archives, index) => (
          <Column key={index}>
            {archives.map((archive) => (
              <ArchivedCard key={archive.archiveId} card={archive} />
            ))}
          </Column>
        ))
      ) : (
        <NotFoundArchiveCard />
      )}
    </Tabs.Content>
  );
};

export default ArchiveTabContent;
