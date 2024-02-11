import { type TemporalMemo } from '../types';
import TodayTemporalMemoCard from './components/Card/Today';
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
      <div>오늘 끄적인 문장</div>
      <ul className={styles.container}>
        {memos.map((memo) => (
          <TodayTemporalMemoCard
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
