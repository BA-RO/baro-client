import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import Icon from '@components/Icon';

import { type WriteHisotry } from '../types';
import WriteHistoryCard from './components/Card';
import * as styles from './style.css';

interface WriteHistoryProps {
  data: WriteHisotry[];
}

const WriteHistory = ({ data }: WriteHistoryProps) => {
  return (
    <section className={styles.container}>
      {data.map((history) => (
        <section key={history.date}>
          <div className={styles.dateLabelWrapper}>
            <div className={styles.dateLabel}>
              <Icon icon={'clock'} width={20} height={20} />
              <span className={styles.dateLabelText}>
                {dayjs(history.date).locale('ko').format('YYYY.MM.DD (dd)')}
              </span>
            </div>
          </div>

          <ol className={styles.contentWrapper}>
            {history.histroy.map((history) => (
              <WriteHistoryCard
                key={history.id}
                createAt={history.createAt}
                value={history.value}
              />
            ))}
          </ol>
        </section>
      ))}
    </section>
  );
};

export default WriteHistory;
