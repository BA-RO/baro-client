import { useState } from 'react';

import { type Folder } from '@api/memoFolder/types';
import Icon from '@components/Icon';

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
