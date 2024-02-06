import { useState } from 'react';

import { IconBookmark, IconCopy, IconMenu, IconSpelling } from '@assets/icons';
import Button from '@components/Button';
import Card from '@components/Card';
import SkeletonContent from '@components/Loading/Skeleton/SkeletonContent';

import { type SpellCheckResponse } from '../../../../../api/spell/types';
import { usePostSpellCheck } from '../../../../../queries/useSpellCheck';
import SpellCheckCard from '../SpellCheckCard';
import * as styles from './style.css';

const WRITE_INPUT_EXAMPLE =
  '안뇽하세요. 리더님! 어제 줌 회의로 가볍게 인사드렸는데 메신저로는 처음 인사 드립니다다름이 아니라 업무 진행을 위해 JIRA 권한을 받고자 하는데 시간 괜찮으실 때 권한 추가해주실 수 있을까요?';

const WriteTodayCard = () => {
  const [spellCheckResult, setSpellCheckResult] =
    useState<SpellCheckResponse>();
  const {
    mutateAsync: spellCheck,
    isPending: isPendingSpellCheck,
    isSuccess: isSuccessSpellCheck,
  } = usePostSpellCheck();

  const handleSpellCheck = async () => {
    const spellCheckResult = await spellCheck({
      sentence: WRITE_INPUT_EXAMPLE,
    });
    setSpellCheckResult(spellCheckResult);
  };

  return (
    <Card color="blue">
      {!isSuccessSpellCheck && (
        <Card.Menu>
          <Button onClick={handleSpellCheck}>
            <IconSpelling className={styles.icon} />
          </Button>
          <Button>
            <IconCopy className={styles.icon} />
          </Button>
          <Button>
            <IconBookmark className={styles.icon} />
          </Button>
          <Button>
            <IconMenu className={styles.icon} />
          </Button>
        </Card.Menu>
      )}
      <Card.Header>오후 8:23</Card.Header>
      <Card.Body>
        <p>{WRITE_INPUT_EXAMPLE}</p>
        {isPendingSpellCheck && (
          <SkeletonContent style={{ marginTop: '18px' }} />
        )}
        {spellCheckResult && (
          <SpellCheckCard spellCheckResult={spellCheckResult.result} />
        )}
      </Card.Body>
    </Card>
  );
};

export default WriteTodayCard;
