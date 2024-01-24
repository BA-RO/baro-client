import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import Icon from '@components/Icon';

import { type Write, type WriteHisotry } from '../types';
import Column from './components/Column';
import * as styles from './style.css';

interface WriteHistoryProps {
  data: WriteHisotry[];
}

const WriteHistory = ({ data }: WriteHistoryProps) => {
  const parser = (arr: Write[]): Write[][] => {
    let queue1: Write[] = [];
    let queue2: Write[] = [];
    let queue3: Write[] = [];

    arr.forEach((history, i) => {
      const extra = i % 3;
      if (extra === 0) {
        queue1.push(history);
      } else if (extra === 1) {
        queue2.push(history);
      } else {
        queue3.push(history);
      }
    });

    return [queue1, queue2, queue3];
  };

  return (
    <article className={styles.container}>
      {data.map((writeHistory) => {
        const { date, history } = writeHistory;

        return (
          <section key={date}>
            <div className={styles.dateLabelWrapper}>
              <div className={styles.dateLabel}>
                <Icon icon={'clock'} width={20} height={20} />
                <span className={styles.dateLabelText}>
                  {dayjs(date).locale('ko').format('YYYY.MM.DD (dd)')}
                </span>
              </div>
            </div>

            <section className={styles.contentWrapper}>
              {parser(history).map((list, i) => {
                return <Column key={i} list={list} />;
              })}
            </section>
          </section>
        );
      })}
    </article>
  );
};

export default WriteHistory;
