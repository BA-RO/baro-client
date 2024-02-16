import { type TemporalMemo } from '@domain/끄적이는/types';

import WriteHistoryCard from '../../Card/History';
import * as styles from './style.css';

interface ColumnProps {
  list: TemporalMemo[] | undefined;
  editModeCardId: number | null;
  resetEditModeCardId: VoidFunction;
  onEditClick: (id: number) => void;
}

const Column = ({
  list,
  editModeCardId,
  resetEditModeCardId,
  onEditClick,
}: ColumnProps) => {
  if (!list) {
    return null;
  }

  return (
    <ol className={styles.container}>
      {list.map((el) => (
        <WriteHistoryCard
          key={el.id}
          {...el}
          isEditMode={editModeCardId === el.id}
          onEditClick={() => onEditClick(el.id)}
          onEditCompleteClick={resetEditModeCardId}
        />
      ))}
    </ol>
  );
};

export default Column;
