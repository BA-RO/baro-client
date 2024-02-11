import { useState } from 'react';
import dayjs from 'dayjs';

import { type SpellCheckResponse } from '@api/spell/types';
import Button from '@components/Button';
import Card from '@components/Card';
import Icon from '@components/Icon';
import SkeletonContent from '@components/Loading/Skeleton/SkeletonContent';
import { usePostSpellCheck } from '@queries/useSpellCheck';

import SpellCheckCard from '../../Today/components/SpellCheckCard';
import * as styles from './style.css';

interface WriteTodayCardProps {
  createAt: string;
  content: string;
}

const WriteTodayCard = ({ createAt, content }: WriteTodayCardProps) => {
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

  return (
    <Card color="blue">
      {!isSuccessSpellCheck && (
        <Card.Menu>
          <Button onClick={handleSpellCheck}>
            <Icon icon="spelling" className={styles.icon} />
          </Button>
          <Button>
            <Icon icon="copy" className={styles.icon} />
          </Button>
          <Button>
            <Icon icon="bookmark" className={styles.icon} />
          </Button>
          <Button>
            <Icon icon="menu" className={styles.icon} />
          </Button>
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
