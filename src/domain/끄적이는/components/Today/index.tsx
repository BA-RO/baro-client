import { useState } from 'react';

import { type Folder } from '@api/memoFolder/types';
import DayMessage from '@components/DayMessage';

import { type TemporalMemo } from '../../types';
import WriteTodayCard from '../Card/Today';
import * as styles from './index.css';

interface TodayTemoralMemosProps {
  memos: TemporalMemo[];
  memoFolders: Folder[];
}

const TodayTemoralMemos = ({ memos, memoFolders }: TodayTemoralMemosProps) => {
  const [editModeCardId, setEditModeCardId] = useState<number | null>(null);

  if (!memos || memos.length === 0) {
    return null;
  }

  return (
    <section>
      <DayMessage icon="clockActive">오늘 끄적인 문장</DayMessage>
      <ul className={styles.container}>
        {memos.map((memo) => (
          <WriteTodayCard
            key={memo.id}
            memo={memo}
            memoFolders={memoFolders}
            isEditMode={editModeCardId === memo.id}
            onEditClick={(id: number) => setEditModeCardId(id)}
            onEditCompleteClick={() => setEditModeCardId(null)}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodayTemoralMemos;
