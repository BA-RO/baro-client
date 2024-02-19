import dayjs from 'dayjs';

import { type Folder } from '@api/memoFolder/types';
import Button from '@components/Button';
import Card from '@components/Card';
import FolderDropdown from '@components/Dropdown/FolderDropdown';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import Icon from '@components/Icon';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import useEditTemporalMemo from '@domain/끄적이는/mutations/useEditTemporalMemo';
import useSaveTemporalMemo from '@domain/끄적이는/mutations/useSaveTemporalMemo';
import { type TemporalMemo } from '@domain/끄적이는/types';
import { useInput } from '@hooks/useInput';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import EditInput from '../../EditInput';
import * as styles from './style.css';

interface WriteHistoryCardProps extends TemporalMemo {
  isEditMode: boolean;
  memoFolders: Folder[];
  onEditClick: VoidFunction;
  onEditCompleteClick: VoidFunction;
}

const WriteHistoryCard = ({
  id,
  createdAt,
  content,
  isArchived,
  isEditMode,
  memoFolders,
  onEditClick,
  onEditCompleteClick,
}: WriteHistoryCardProps) => {
  const { showToast } = useToastStore();

  const { mutate: updateTemporalMemo } = useEditTemporalMemo();
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();
  const { mutate: saveTemporalMemo } = useSaveTemporalMemo();

  const editedInputProps = useInput({
    id: 'edit-input',
    defaultValue: content,
  });

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  // TODO 밸리데이션 추가
  const handleEditCompleteClick = () => {
    updateTemporalMemo({ id: id, content: editedInputProps.value });
    setTimeout(() => onEditCompleteClick(), 0);
  };

  const handleFolderClick = (memoFolderId: Folder['id']) => {
    saveTemporalMemo({ temporalMemoId: id, memoFolderId });
  };

  const handleBookmarkClick = () => {};

  if (isEditMode) {
    return (
      <li className={styles.container}>
        <div className={styles.header}>
          <p className={styles.date}>
            {dayjs(createdAt).locale('ko').format('a h:mm')}
          </p>
          <button
            onClick={handleEditCompleteClick}
            className={styles.editCompleteBtn}
          >
            완료
          </button>
        </div>
        <EditInput inputProps={editedInputProps} />
      </li>
    );
  }

  return (
    <Card color="grey">
      <Card.Header>
        {dayjs(createdAt).locale('ko').format('a h:mm')}
      </Card.Header>
      <Card.Menu>
        <Button onClick={handleCopyClick}>
          <Icon icon="copy" color={COLORS['Grey/300']} />
        </Button>
        <FolderDropdown
          isArchived={isArchived}
          memoFolders={memoFolders}
          onClickFolder={handleFolderClick}
          onClickBookmark={handleBookmarkClick}
        />
        <MenuDropdown
          onEdit={onEditClick}
          onDelete={() => deleteTemporalMemo(id)}
        />
      </Card.Menu>
      <Card.Body>{content}</Card.Body>
    </Card>
  );
};

export default WriteHistoryCard;
