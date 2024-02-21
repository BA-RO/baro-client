import { useState } from 'react';

import Badge from '@components/Badge';
import Button from '@components/Button';
import TooltipButton from '@components/Button/components/TooltipButton';
import Card from '@components/Card';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import { CATEGORY_COLOR } from '@constants/config';
import EditInput from '@domain/끄적이는/components/EditInput';
import useDeleteArchives from '@domain/저장하는/mutations/useDeleteArchives';
import useUpdateArchives from '@domain/저장하는/mutations/useUpdateArchives';
import { getNumToK } from '@domain/참고하는/utils';
import { useInput } from '@hooks/useInput';
import { useToastStore } from '@stores/toast';

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
  const { mutate: deleteArchivedCard } = useDeleteArchives(folderId);

  const editedInputProps = useInput({
    id: 'edit-input',
    defaultValue: card.content,
  });

  const handleCopyClick = (content: ArchiveCard['content']) => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  const handleEditClick = () => {
    updateArchivedCardContent({
      archiveId: card.archiveId,
      content: editedInputProps.value,
    });

    setIsEditMode(false);
  };

  const handleDeleteClick = () => {
    deleteArchivedCard({ archiveId: card.archiveId });
  };

  // 참고하는 카드(템플릿)인 경우
  if (card.categoryName) {
    return (
      <Card className={styles.card} color={CATEGORY_COLOR[card.categoryName]}>
        <Card.Menu>
          <TooltipButton
            icon="copy"
            content="복사"
            onClick={() => handleCopyClick(card.content)}
          />
          <MenuDropdown onDelete={handleDeleteClick} />
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
          <Button className={styles.editButton} onClick={handleEditClick}>
            완료
          </Button>
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
        <TooltipButton
          icon="copy"
          content="복사"
          onClick={() => handleCopyClick(card.content)}
        />
        <MenuDropdown
          onEdit={() => setIsEditMode(true)}
          onDelete={handleDeleteClick}
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
