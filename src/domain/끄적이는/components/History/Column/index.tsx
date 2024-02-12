import { type TemporalMemo } from '@domain/끄적이는/types';

import WriteHistoryCard from '../../Card/History';
import * as styles from './style.css';

interface ColumnProps {
  list: TemporalMemo[] | undefined;
}

const Column = ({ list }: ColumnProps) => {
  if (!list) {
    return null;
  }

  return (
    <ol className={styles.container}>
      {list.map((el) => (
        <WriteHistoryCard key={el.id} {...el} />
      ))}
    </ol>
  );
};

export default Column;
