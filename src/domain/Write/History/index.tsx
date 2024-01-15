import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import Icon from '@components/Icon';

import { type WriteHisotry } from '../types';
import WriteHistoryCard from './components/Card';
import * as style from './index.css';

interface WriteHistoryProps {
  data: WriteHisotry[];
}

const WriteHistory = ({ data }: WriteHistoryProps) => {
  return (
    <section className={style.container}>
      {data.map((history) => (
        <ol key={history.date}>
          <div className={style.dateLabelWrapper}>
            <div className={style.dateLabel}>
              <Icon icon={'clock'} width={20} height={20} />
              <span className={style.dateLabelText}>
                {dayjs(history.date).locale('ko').format('YYYY.MM.DD (dd)')}
              </span>
            </div>
          </div>

          {history.histroy.map((history) => (
            <WriteHistoryCard
              key={history.id}
              createAt={history.createAt}
              value={history.value}
            />
          ))}
        </ol>
      ))}
    </section>
  );
};

export default WriteHistory;
