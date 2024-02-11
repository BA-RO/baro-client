import Icon from '@components/Icon';

import WriteTodayCard from '../Today/components/Card';
import { type TemporalMemo } from '../types';
import * as styles from './TodayTemoralMemos.css';

interface TodayTemoralMemosProps {
  memos: TemporalMemo[];
}

const TodayTemoralMemos = ({ memos }: TodayTemoralMemosProps) => {
  if (!memos || memos.length === 0) {
    return null;
  }

  return (
    <section>
      <div className={styles.dateLabelWrapper}>
        <div className={styles.dateLabel}>
          <Icon icon={'clockActive'} width={20} height={20} />
          <p className={styles.dateLabelText}>오늘 끄적인 문장</p>
        </div>
      </div>
      <ul className={styles.container}>
        {memos.map((memo) => (
          <WriteTodayCard
            key={memo.id}
            createAt={memo.createdAt}
            content={memo.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodayTemoralMemos;
