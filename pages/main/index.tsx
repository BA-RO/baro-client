import { useState } from 'react';

import WriteInput from '@components/Input/WriteInput';
import Layout from '@components/Layout';
import MainPageTab from '@components/Layout/MainPageTab';
import WriteGuide from '@domain/끄적이는/components/Guide';
import TemporalMemoHistoryTable from '@domain/끄적이는/components/History';
import TodayTemoralMemos from '@domain/끄적이는/components/Today';
import useCreateTemporalMemo from '@domain/끄적이는/mutations/useCreateTemporalMemo';
import useGetWriteHistory from '@domain/끄적이는/queries/useGetHistory';
import * as styles from '@domain/끄적이는/style.css';
import 참고하는TabContent from '@domain/참고하는/components';
import { useInput } from '@hooks/useInput';
import { COLORS } from '@styles/tokens';

const DUMMY = [
  {
    createdAt: '2024-01-23',
    temporalMemos: [
      {
        id: 4,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-23T15:15:18.678231',
      },
      {
        id: 5,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-23T15:15:18.695559',
      },
      {
        id: 6,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-23T15:15:18.715172',
      },
    ],
  },
  {
    createdAt: '2024-01-20',
    temporalMemos: [
      {
        id: 1,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-20T15:15:18.678231',
      },
      {
        id: 2,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-20T15:15:18.695559',
      },
      {
        id: 3,
        content: '끄적이는 메모 컨텐츠',
        correctionContent: null,
        isCorrected: false,
        isArchived: false,
        createdAt: '2024-01-20T15:15:18.715172',
      },
    ],
  },
];

const MainPage = () => {
  const { todayMemos, history } = useGetWriteHistory();
  const { mutate: submitTemporalMemo } = useCreateTemporalMemo();

  const writeInput = useInput({ id: 'write-input' });
  const [selectedTab, setSelectedTab] = useState('끄적이는');

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  const backgroundColor =
    selectedTab === '참고하는' ? COLORS['Grey/100'] : undefined;

  return (
    <Layout backgroundColor={backgroundColor}>
      <MainPageTab
        write={
          <div className={styles.container}>
            <div className={styles.content}>
              <WriteGuide />
              <TemporalMemoHistoryTable data={[...DUMMY, ...history]} />
              <TodayTemoralMemos memos={todayMemos[0]?.temporalMemos} />
              <div className={styles.inputWrapper}>
                <WriteInput
                  inputProps={writeInput}
                  onSubmit={() => submitTemporalMemo(writeInput.value)}
                />
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
