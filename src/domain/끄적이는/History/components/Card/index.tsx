import dayjs from 'dayjs';

import { type Write } from '@domain/끄적이는/types';

import * as styles from './style.css';

const WriteHistoryCard = ({ createAt, value }: Omit<Write, 'id'>) => {
  return (
    <li className={styles.container}>
      <p className={styles.date}>
        {dayjs(createAt).locale('ko').format('a h:mm')}
      </p>
      <p className={styles.value}>{value}</p>
    </li>
  );
};

export default WriteHistoryCard;
