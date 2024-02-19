import Spinner from '@components/Loading/Spinner';
import Responsive from '@components/Responsive';
import Tabs from '@components/Tabs';
import { useGetArchives } from '@domain/저장하는/queries/useGetArchives';

import ArchivedCard from '../ArchivedCard';
import NotFoundArchiveCard from '../NotFoundArchiveCard';

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
    <Tabs.Content value={selectedTab}>
      {archiveCards.length ? (
        <Responsive>
          {archiveCards.map((archive) => (
            <ArchivedCard
              key={archive.archiveId}
              folderId={folderId}
              card={archive}
            />
          ))}
        </Responsive>
      ) : (
        <NotFoundArchiveCard />
      )}
    </Tabs.Content>
  );
};

export default ArchiveTabContent;
