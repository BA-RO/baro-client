import { useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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
  const [inputWrapperHeight, setInputWrapperHeight] = useState(0);

  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const writeContentRef = useRef<HTMLDivElement>(null);
  const writeInput = useInput({ id: 'write-input' });

  const {
    data: { history, todayMemos },
    isLoading: isLoadingWriteHistory,
  } = useGetWriteHistory();
  const { mutate: submitTemporalMemo } = useCreateTemporalMemo();
  const { data: memoFolders } = useGetMemoFolders();

  const handleSubmit = () => {
    writeInput.value.trim() && submitTemporalMemo(writeInput.value);
    writeInput.reset();
  };

  useEffect(() => {
    if (!inputWrapperRef.current) return;
    setInputWrapperHeight(inputWrapperRef.current.offsetHeight);
  }, [writeInput.value]);

  useEffect(() => {
    writeContentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [todayMemos, inputWrapperHeight, writeContentRef.current?.scrollHeight]);

  return (
    <>
      <div
        className={styles.container}
        style={assignInlineVars({
          [styles.marginBottom]: `${inputWrapperHeight + 48}px`,
          [styles.scrollMarginBottom]: `${inputWrapperHeight + 48}px`,
        })}
        ref={writeContentRef}
      >
        {!isLoadingWriteHistory && (
          <Guide hasMemo={!!history.length || !!todayMemos.length} />
        )}
        <TemporalMemoHistoryTable data={history} memoFolders={memoFolders} />
        <TodayTemoralMemos
          memos={todayMemos[0]?.temporalMemos}
          memoFolders={memoFolders}
        />
      </div>
      <div className={styles.inputWrapper} ref={inputWrapperRef}>
        <WriteInput inputProps={writeInput} onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default WriteTabContent;
