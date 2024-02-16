import { useState } from 'react';

import Badge from '@components/Badge';
import Button from '@components/Button';
import Card from '@components/Card';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import Icon from '@components/Icon';
import { CATEGORY_COLOR } from '@constants/config';
import EditInput from '@domain/끄적이는/components/EditInput';
import useUpdateArchives from '@domain/저장하는/mutations/useUpdateArchives';
import { getNumToK } from '@domain/참고하는/utils';
import { useInput } from '@hooks/useInput';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import { type ArchiveCard, type Folder } from '../../types';
import * as styles from './style.css';

interface ArchivedCardProps {
  folderId: Folder['id'];
  card: ArchiveCard;
}

const ArchivedCard = ({ folderId, card }: ArchivedCardProps) => {
  const { showToast } = useToastStore();

  const [isEditMode, setIsEditMode] = useState(false);

  const { mutate: updateArchivedCardContent } = useUpdateArchives(folderId);
  const editedInputProps = useInput({
    id: 'edit-input',
    defaultValue: card.content,
  });

  const handleEditClick = () => {
    updateArchivedCardContent({
      archiveId: card.archiveId,
      content: editedInputProps.value,
    });

    setIsEditMode(false);
  };

  const handleCopyClick = (content: ArchiveCard['content']) => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  // 참고하는 카드(템플릿)인 경우
  if (card.categoryName) {
    return (
      <Card className={styles.card} color={CATEGORY_COLOR[card.categoryName]}>
        <Card.Menu>
          <Button onClick={() => handleCopyClick(card.content)}>
            <Icon icon="copy" color={COLORS['Grey/300']} />
          </Button>
          <MenuDropdown onDelete={() => console.log('삭제')} />
        </Card.Menu>
        <Card.Header>
          <Badge color="black">{card.tabName}</Badge>
          <Badge color={CATEGORY_COLOR[card.categoryName]}>
            {card.categoryName}
          </Badge>
        </Card.Header>
        <Card.Body>{card.content}</Card.Body>
        <Card.Footer>
          복사 <span>{getNumToK(card.copiedCount)}</span> • 저장{' '}
          <span>{getNumToK(card.savedCount)}</span>
        </Card.Footer>
      </Card>
    );
  }

  // 끄적이는 카드인 경우 + 수정 모드
  if (isEditMode) {
    return (
      <Card className={styles.card} color="grey">
        <Card.Header>
          <Badge color="black">{card.tabName}</Badge>
          <button onClick={handleEditClick}>완료</button>
        </Card.Header>
        <Card.Body>
          <EditInput inputProps={editedInputProps} />
        </Card.Body>
      </Card>
    );
  }

  // 끄적이는 카드인 경우
  return (
    <Card className={styles.card} color="grey">
      <Card.Menu>
        <Button onClick={() => handleCopyClick(card.content)}>
          <Icon icon="copy" color={COLORS['Grey/300']} />
        </Button>
        <MenuDropdown
          onEdit={() => setIsEditMode(true)}
          onDelete={() => console.log('삭제')}
        />
      </Card.Menu>
      <Card.Header>
        <Badge color="black">{card.tabName}</Badge>
      </Card.Header>
      <Card.Body>{card.content}</Card.Body>
    </Card>
  );
};

export default ArchivedCard;
