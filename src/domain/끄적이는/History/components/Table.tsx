import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import Icon from '@components/Icon';

import { type TemporalMemo, type TemporalMemoHistory } from '../../types';
import Column from './Column';
import * as styles from './Table.css';

interface TemporalMemoHistoryTableProps {
  data: TemporalMemoHistory[];
}

const parser = (arr: TemporalMemo[]): TemporalMemo[][] => {
  let queue1: TemporalMemo[] = [];
  let queue2: TemporalMemo[] = [];
  let queue3: TemporalMemo[] = [];

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

const TemporalMemoHistoryTable = ({ data }: TemporalMemoHistoryTableProps) => {
  return (
    <article className={styles.container}>
      {data.map((hisotry, i) => {
        const { createAt, temporalMemos } = hisotry;

        return (
          <section key={`${createAt}-${i}`}>
            <div className={styles.dateLabelWrapper}>
              <div className={styles.dateLabel}>
                <Icon icon={'clock'} width={20} height={20} />
                <span className={styles.dateLabelText}>
                  {dayjs(createAt).locale('ko').format('YYYY.MM.DD (dd)')}
                </span>
              </div>
            </div>

            <section className={styles.contentWrapper}>
              {parser(temporalMemos).map((list, i) => {
                return <Column key={i} list={list} />;
              })}
            </section>
          </section>
        );
      })}
    </article>
  );
};

export default TemporalMemoHistoryTable;
