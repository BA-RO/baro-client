import dayjs from 'dayjs';

import { type Folder } from '@api/memoFolder/types';
import Button from '@components/Button';
import TooltipButton from '@components/Button/components/TooltipButton';
import Card from '@components/Card';
import FolderDropdown from '@components/Dropdown/FolderDropdown';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import useEditTemporalMemo from '@domain/끄적이는/mutations/useEditTemporalMemo';
import useSaveTemporalMemo from '@domain/끄적이는/mutations/useSaveTemporalMemo';
import { type TemporalMemo } from '@domain/끄적이는/types';
import { useInput } from '@hooks/useInput';
import { useToastStore } from '@stores/toast';

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

  const handleEditCompleteClick = () => {
    updateTemporalMemo({ id, content: editedInputProps.value });
    setTimeout(() => onEditCompleteClick(), 0);
  };

  const handleFolderClick = (memoFolderId: Folder['id']) => {
    saveTemporalMemo({ temporalMemoId: id, memoFolderId });
  };

  if (isEditMode) {
    return (
      <Card color="grey">
        <Card.Header>
          {dayjs(createdAt).locale('ko').format('a h:mm')}
          <Button
            className={styles.editCompleteButton}
            onClick={handleEditCompleteClick}
          >
            완료
          </Button>
        </Card.Header>
        <Card.Body>
          <EditInput inputProps={editedInputProps} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card color="grey">
      <Card.Header>
        {dayjs(createdAt).locale('ko').format('a h:mm')}
      </Card.Header>
      <Card.Menu>
        <TooltipButton icon="copy" content="복사" onClick={handleCopyClick} />
        <FolderDropdown
          isArchived={isArchived}
          memoFolders={memoFolders}
          onClickFolder={handleFolderClick}
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
