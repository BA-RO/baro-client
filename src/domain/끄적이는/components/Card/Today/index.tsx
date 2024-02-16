import { useState } from 'react';
import dayjs from 'dayjs';

import { type SpellCheckResponse } from '@api/spell/types';
import Button from '@components/Button';
import Card from '@components/Card';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import Icon from '@components/Icon';
import SkeletonContent from '@components/Loading/Skeleton/SkeletonContent';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import useEditTemporalMemo from '@domain/끄적이는/mutations/useEditTemporalMemo';
import { useInput } from '@hooks/useInput';
import usePostSpellCheck from '@queries/usePostSpellCheck';
import { useToastStore } from '@stores/toast';

import EditInput from '../../EditInput';
import SpellCheckCard from '../../Today/components/SpellCheckCard';
import * as styles from './style.css';

interface WriteTodayCardProps {
  id: number;
  createAt: string;
  content: string;
  isEditMode: boolean;
  onEditClick: (id: number) => void;
  onEditCompleteClick: VoidFunction;
}

const WriteTodayCard = ({
  id,
  createAt,
  content,
  isEditMode,
  onEditClick,
  onEditCompleteClick,
}: WriteTodayCardProps) => {
  const { showToast } = useToastStore();
  const { mutate: updateTemporalMemo } = useEditTemporalMemo();
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();

  const editInputProps = useInput({
    id: 'edit-today-input',
    defaultValue: content,
  });

  const [spellCheckResult, setSpellCheckResult] =
    useState<SpellCheckResponse>();
  const {
    mutateAsync: spellCheck,
    isPending: isPendingSpellCheck,
    isSuccess: isSuccessSpellCheck,
  } = usePostSpellCheck();

  const handleSpellCheck = async () => {
    const spellCheckResult = await spellCheck({
      sentence: content,
    });

    setSpellCheckResult(spellCheckResult);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  //TODO: 밸리데이션 추가
  const handleUpdate = () => {
    updateTemporalMemo({ id: id, content: editInputProps.value });
    setTimeout(() => onEditCompleteClick(), 0);
  };

  if (isEditMode) {
    return (
      <Card color="blue">
        <Card.Header>
          {dayjs(createAt).locale('ko').format('a h:mm')}
          <button className={styles.editCompleteBtn} onClick={handleUpdate}>
            완료
          </button>
        </Card.Header>
        <Card.Body>
          <EditInput inputProps={editInputProps} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card color="blue">
      {!isSuccessSpellCheck && (
        <Card.Menu>
          <Button onClick={handleSpellCheck}>
            <Icon icon="spelling" className={styles.icon} />
          </Button>
          <Button onClick={handleCopyClick}>
            <Icon icon="copy" className={styles.icon} />
          </Button>
          <Button>
            <Icon icon="bookmark" className={styles.icon} />
          </Button>
          <MenuDropdown
            onEdit={() => onEditClick(id)}
            onDelete={() => deleteTemporalMemo(id)}
          />
        </Card.Menu>
      )}
      <Card.Header>{dayjs(createAt).locale('ko').format('a h:mm')}</Card.Header>
      <Card.Body>
        <p>{content}</p>
        {isPendingSpellCheck && (
          <div className={styles.skeletonCard}>
            <SkeletonContent ratios={[16]} />
            <div className={styles.skeletonSuggestion}>
              <SkeletonContent />
            </div>
          </div>
        )}
        {spellCheckResult && (
          <SpellCheckCard spellCheckResult={spellCheckResult.result} />
        )}
      </Card.Body>
    </Card>
  );
};

export default WriteTodayCard;
