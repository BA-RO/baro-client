import { type ChangeEvent, type KeyboardEvent, useRef, useState } from 'react';
import dayjs from 'dayjs';

import Icon from '@components/Icon';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import { type TemporalMemo } from '@domain/끄적이는/types';
import { useInput } from '@hooks/useInput';
import useModal from '@hooks/useModal';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import SettingDialog from '../components/SettingDialog';
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
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();
  const editedInputProps = useInput({
    id: 'edit-input',
    defaultValue: content,
  });

  const {
    isOpen: settingModalOpen,
    handleOpen: showSettingModal,
    handleClose: hideSettingModal,
  } = useModal();

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [textareaHeight, setTextareaHeight] = useState<{
    row: number;
    lineBreak: Record<number, boolean>;
  }>({
    row: 1,
    lineBreak: {},
  });

  const handleResize = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight, value } = e.target;

    if (value.length === 0) {
      setTextareaHeight((prev) => ({
        row: 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: false },
      }));
    }

    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const handleKeydownEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [editedInputProps.value.length]: true },
      }));
      return;
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  // TODO 밸리데이션 추가
  const handleEditCompleteClick = () => {
    onEditCompleteClick();
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
        <div className={styles.editContainer}>
          <textarea
            {...editedInputProps}
            ref={inputRef}
            className={styles.editInput}
            autoComplete="off"
            rows={textareaHeight.row}
            maxLength={500}
            onInput={handleResize}
            onKeyDown={handleKeydownEnter}
          />
          <p className={styles.editInputTextCount}>
            <span className={styles.editTextCurrentCount}>
              {editedInputProps.value.length}
            </span>
            / 500
          </p>
        </div>
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
          <button
            onClick={settingModalOpen ? hideSettingModal : showSettingModal}
          >
            <Icon
              icon="menu"
              color={COLORS['Grey/300']}
              className={styles.icon}
            />
          </button>
        </div>
      </div>

      <p className={styles.value}>{content}</p>

      {settingModalOpen && (
        <SettingDialog
          onEditClick={onEditClick}
          onDeleteClick={() => deleteTemporalMemo(id)}
        />
      )}
    </li>
  );
};

export default WriteHistoryCard;
