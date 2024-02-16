import Badge from '@components/Badge';
import Button from '@components/Button';
import Card from '@components/Card';
import MenuButton from '@components/Dropdown/MenuButton';
import Icon from '@components/Icon';
import { CATEGORY_COLOR } from '@constants/config';
import { getNumToK } from '@domain/참고하는/utils';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import { type ArchiveCard } from '../../types';
import * as styles from './style.css';

interface ArchivedCardProps {
  card: ArchiveCard;
}

const ArchivedCard = ({ card }: ArchivedCardProps) => {
  const { showToast } = useToastStore();

  const handleCopyClick = (content: string) => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  return (
    <Card
      className={styles.card}
      color={card.categoryName ? CATEGORY_COLOR[card.categoryName] : 'grey'}
    >
      <Card.Menu>
        <Button onClick={() => handleCopyClick(card.content)}>
          <Icon icon="copy" color={COLORS['Grey/300']} />
        </Button>
        <MenuButton
          onEdit={() => console.log('수정')}
          onDelete={() => console.log('삭제')}
        />
      </Card.Menu>
      <Card.Header>
        <Badge color="black">{card.tabName}</Badge>
        {card.categoryName && (
          <Badge
            color={
              card.categoryName ? CATEGORY_COLOR[card.categoryName] : 'black'
            }
          >
            {card.categoryName}
          </Badge>
        )}
      </Card.Header>
      <Card.Body>{card.content}</Card.Body>
      {card.categoryName && (
        <Card.Footer>
          복사 <span>{getNumToK(card.copiedCount)}</span> • 저장{' '}
          <span>{getNumToK(card.savedCount)}</span>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ArchivedCard;
