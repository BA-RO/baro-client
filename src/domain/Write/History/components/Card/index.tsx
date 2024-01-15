import dayjs from 'dayjs';

import { type Write } from '@domain/Write/types';

import * as style from './index.css';

const WriteHistoryCard = ({ createAt, value }: Omit<Write, 'id'>) => {
  return (
    <li className={style.container}>
      <p className={style.date}>
        {dayjs(createAt).locale('ko').format('a h:mm')}
      </p>
      <p className={style.value}>{value}</p>
    </li>
  );
};

export default WriteHistoryCard;
