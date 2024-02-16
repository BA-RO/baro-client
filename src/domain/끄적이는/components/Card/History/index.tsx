import dayjs from 'dayjs';

import MenuButton from '@components/Dropdown/MenuButton';
import Icon from '@components/Icon';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import useEditTemporalMemo from '@domain/끄적이는/mutations/useEditTemporalMemo';
import { type TemporalMemo } from '@domain/끄적이는/types';
import { useInput } from '@hooks/useInput';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import EditInput from '../../EditInput';
import * as styles from './style.css';

interface WriteHistoryCardProps extends TemporalMemo {
  isEditMode: boolean;
  onEditClick: VoidFunction;
  onEditCompleteClick: VoidFunction;
}

const WriteHistoryCard = ({
  id,
  createdAt,
  content,
  isEditMode,
  onEditClick,
  onEditCompleteClick,
}: WriteHistoryCardProps) => {
  const { showToast } = useToastStore();
  const { mutate: updateTemporalMemo } = useEditTemporalMemo();
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();
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
    <li className={styles.container}>
      <div className={styles.header}>
        <p className={styles.date}>
          {dayjs(createdAt).locale('ko').format('a h:mm')}
        </p>
        <div className={styles.ctaWrapper}>
          <button onClick={handleCopyClick}>
            <Icon
              icon={'copy'}
              width={24}
              height={24}
              color={COLORS['Grey/300']}
              className={styles.icon}
            />
          </button>
          <button>
            <Icon
              icon="bookmark"
              color={COLORS['Grey/300']}
              className={styles.icon}
            />
          </button>
          <MenuButton
            onEdit={onEditClick}
            onDelete={() => deleteTemporalMemo(id)}
          />
        </div>
      </div>
      <p className={styles.value}>{content}</p>
    </li>
  );
};

export default WriteHistoryCard;
