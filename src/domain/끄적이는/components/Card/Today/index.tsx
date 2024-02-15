import { useState } from 'react';
import dayjs from 'dayjs';

import { type SpellCheckResponse } from '@api/spell/types';
import Button from '@components/Button';
import Card from '@components/Card';
import MenuButton from '@components/Dropdown/MenuButton';
import Icon from '@components/Icon';
import SkeletonContent from '@components/Loading/Skeleton/SkeletonContent';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import usePostSpellCheck from '@queries/usePostSpellCheck';
import { useToastStore } from '@stores/toast';

import SpellCheckCard from '../../Today/components/SpellCheckCard';
import * as styles from './style.css';

interface WriteTodayCardProps {
  id: number;
  createAt: string;
  content: string;
}

const WriteTodayCard = ({ id, createAt, content }: WriteTodayCardProps) => {
  const { showToast } = useToastStore();
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();

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
          <MenuButton
            onEdit={() => {}}
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
