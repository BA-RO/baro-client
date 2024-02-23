import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import WriteInput from '@components/Input/WriteInput';
import Layout from '@components/Layout';
import MainPageTab from '@components/Layout/MainPageTab';
import { ROUTES } from '@constants/routes';
import WriteGuide from '@domain/끄적이는/components/Guide';
import TemporalMemoHistoryTable from '@domain/끄적이는/components/History';
import TodayTemoralMemos from '@domain/끄적이는/components/Today';
import useCreateTemporalMemo from '@domain/끄적이는/mutations/useCreateTemporalMemo';
import useGetWriteHistory from '@domain/끄적이는/queries/useGetHistory';
import * as styles from '@domain/끄적이는/style.css';
import 참고하는TabContent from '@domain/참고하는/components';
import { useInput } from '@hooks/useInput';
import useGetMemoFolders from '@queries/useGetMemoFolders';
import useGetMyProfile from '@queries/useGetMyProfile';
import { COLORS } from '@styles/tokens';

const MainPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useGetMyProfile();

  const writeContentRef = useRef<HTMLDivElement>(null);
  const writeInput = useInput({ id: 'write-input' });
  const { todayMemos, history } = useGetWriteHistory();
  const { mutate: submitTemporalMemo } = useCreateTemporalMemo();
  const { data: memoFolders } = useGetMemoFolders();

  const selectedTab = searchParams.get('tab') || 'write';

  useEffect(() => {
    handleScroll();
  }, [todayMemos]);

  const handleScroll = () => {
    if (writeContentRef.current) {
      writeContentRef.current.scrollTop = writeContentRef.current.scrollHeight;
    }
  };

  const handleTabSelect = (selectedTab: string) => {
    router.push(`${ROUTES.MAIN}?tab=${selectedTab}`);
  };

  const handleSubmit = () => {
    submitTemporalMemo(writeInput.value);
    writeInput.reset();

    handleScroll();
  };

  const backgroundColor =
    selectedTab === 'refer' ? COLORS['Grey/100'] : undefined;

  return (
    <Layout backgroundColor={backgroundColor}>
      <MainPageTab
        write={
          <div className={styles.container}>
            <div ref={writeContentRef} className={styles.content}>
              <WriteGuide />
              <TemporalMemoHistoryTable
                data={history}
                memoFolders={memoFolders}
              />
              <TodayTemoralMemos
                memos={todayMemos[0]?.temporalMemos}
                memoFolders={memoFolders}
              />
              <div className={styles.inputWrapper}>
                <WriteInput inputProps={writeInput} onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        }
        refer={<참고하는TabContent />}
        selectedTab={selectedTab}
        handleTabSelect={handleTabSelect}
      />
    </Layout>
  );
};

export default MainPage;
