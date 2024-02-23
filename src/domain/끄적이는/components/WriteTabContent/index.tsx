import { useEffect, useRef } from 'react';

import WriteInput from '@components/Input/WriteInput';
import useCreateTemporalMemo from '@domain/끄적이는/mutations/useCreateTemporalMemo';
import useGetWriteHistory from '@domain/끄적이는/queries/useGetHistory';
import { useInput } from '@hooks/useInput';
import useGetMemoFolders from '@queries/useGetMemoFolders';

import Guide from '../Guide';
import TemporalMemoHistoryTable from '../History';
import TodayTemoralMemos from '../Today';
import * as styles from './style.css';

const WriteTabContent = () => {
  const writeContentRef = useRef<HTMLDivElement>(null);
  const writeInput = useInput({ id: 'write-input' });

  const {
    data: { history, todayMemos },
    isLoading: isLoadingWriteHistory,
  } = useGetWriteHistory();
  const { mutate: submitTemporalMemo } = useCreateTemporalMemo();
  const { data: memoFolders } = useGetMemoFolders();

  useEffect(() => {
    handleScroll();
  }, [todayMemos]);

  const handleScroll = () => {
    if (writeContentRef.current) {
      writeContentRef.current.scrollTop = writeContentRef.current.scrollHeight;
    }
  };

  const handleSubmit = () => {
    submitTemporalMemo(writeInput.value);
    writeInput.reset();

    handleScroll();
  };

  return (
    <div className={styles.container}>
      <div ref={writeContentRef} className={styles.content}>
        {!isLoadingWriteHistory && (
          <Guide hasMemo={!!history.length || !!todayMemos.length} />
        )}
        <TemporalMemoHistoryTable data={history} memoFolders={memoFolders} />
        <TodayTemoralMemos
          memos={todayMemos[0]?.temporalMemos}
          memoFolders={memoFolders}
        />
        <div className={styles.inputWrapper}>
          <WriteInput inputProps={writeInput} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default WriteTabContent;
