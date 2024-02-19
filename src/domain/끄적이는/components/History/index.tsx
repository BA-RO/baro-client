import { useState } from 'react';
import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import Icon from '@components/Icon';
import Responsive from '@components/Responsive';
import useGetMemoFolders from '@queries/useGetMemoFolders';

import { type TemporalMemoHistory } from '../../types';
import WriteHistoryCard from '../Card/History';
import * as styles from './index.css';

interface TemporalMemoHistoryTableProps {
  data: TemporalMemoHistory[];
}

const TemporalMemoHistoryTable = ({ data }: TemporalMemoHistoryTableProps) => {
  const { data: memoFolders } = useGetMemoFolders();

  const [editModeCardId, setEditModeCardId] = useState<number | null>(null);

  return (
    <article className={styles.container}>
      {data.map((hisotry, i) => {
        const { createdAt: createAt, temporalMemos } = hisotry;

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
            <Responsive>
              {temporalMemos.map((temporalMemo) => (
                <WriteHistoryCard
                  key={temporalMemo.id}
                  {...temporalMemo}
                  memoFolders={memoFolders}
                  isEditMode={editModeCardId === temporalMemo.id}
                  onEditClick={() => setEditModeCardId(temporalMemo.id)}
                  onEditCompleteClick={() => setEditModeCardId(null)}
                />
              ))}
            </Responsive>
          </section>
        );
      })}
    </article>
  );
};

export default TemporalMemoHistoryTable;
