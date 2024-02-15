import Badge from '@components/Badge';
import Button from '@components/Button';
import Card from '@components/Card';
import Column from '@components/Column';
import MenuButton from '@components/Dropdown/MenuButton';
import Icon from '@components/Icon';
import Spinner from '@components/Loading/Spinner';
import Tabs from '@components/Tabs';
import { CATEGORY_COLOR } from '@constants/config';
import { useGetArchives } from '@domain/저장하는/queries/useGetArchives';
import { getNumToK } from '@domain/참고하는/utils';
import { COLORS } from '@styles/tokens';
import parserColumn from '@utils/parserColumn';

import NotFoundArchiveCard from '../NotFoundArchiveCard';
import * as styles from './style.css';

interface ArchiveCardTabContentProps {
  tabValue: string;
  folderId: number;
}

const ArchiveCardTabContent = ({
  tabValue,
  folderId,
}: ArchiveCardTabContentProps) => {
  const { data: archiveCards } = useGetArchives(folderId, tabValue);

  if (!archiveCards) {
    return (
      <Tabs.Content value={tabValue}>
        <Spinner />
      </Tabs.Content>
    );
  }

  return (
    <Tabs.Content value={tabValue} className={styles.tabContent}>
      {archiveCards.length ? (
        parserColumn(archiveCards).map((archives, index) => (
          <Column key={index}>
            {archives.map((archive) => {
              return (
                <Card
                  key={archive.archiveId}
                  className={styles.card}
                  color={
                    archive.categoryName
                      ? CATEGORY_COLOR[archive.categoryName]
                      : 'grey'
                  }
                >
                  <Card.Menu>
                    <Button>
                      <Icon icon="copy" color={COLORS['Grey/300']} />
                    </Button>
                    <MenuButton
                      onEdit={() => console.log('수정')}
                      onDelete={() => console.log('삭제')}
                    />
                  </Card.Menu>
                  <Card.Header>
                    <Badge color="black">{archive.tabName}</Badge>
                    {archive.categoryName && (
                      <Badge
                        color={
                          archive.categoryName
                            ? CATEGORY_COLOR[archive.categoryName]
                            : 'black'
                        }
                      >
                        {archive.categoryName}
                      </Badge>
                    )}
                  </Card.Header>
                  <Card.Body>{archive.content}</Card.Body>
                  {archive.categoryName && (
                    <Card.Footer>
                      복사 <span>{getNumToK(archive.copiedCount)}</span> • 저장{' '}
                      <span>{getNumToK(archive.savedCount)}</span>
                    </Card.Footer>
                  )}
                </Card>
              );
            })}
          </Column>
        ))
      ) : (
        <NotFoundArchiveCard />
      )}
    </Tabs.Content>
  );
};

export default ArchiveCardTabContent;
