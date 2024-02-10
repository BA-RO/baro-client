import { type Write } from '@domain/끄적이는/types';

import WriteHistoryCard from '../Card';
import * as styles from './style.css';

interface ColumnProps {
  list: Write[] | undefined;
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
