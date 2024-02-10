import { useState } from 'react';

import WriteInput from '@components/Input/WriteInput';
import Layout from '@components/Layout';
import MainPageTab from '@components/Layout/MainPageTab';
import WriteGuide from '@domain/끄적이는/components/Guide';
import TemporalMemoHistoryTable from '@domain/끄적이는/History/components/Table';
import useGetWriteHistory from '@domain/끄적이는/queries/useGetHistory';
import * as styles from '@domain/끄적이는/style.css';
import { type WriteHisotry } from '@domain/끄적이는/types';
import 참고하는TabContent from '@domain/참고하는/components';
import { useInput } from '@hooks/useInput';
import { COLORS } from '@styles/tokens';

const MOCK: WriteHisotry[] = [
  {
    date: '2024-01-03',
    history: [
      { createAt: '2024-01-03T01:01', id: '1', value: 'test 1' },
      { createAt: '2024-01-03T11:01', id: '2', value: 'test 2' },
      {
        createAt: '2024-01-03T21:01',
        id: '11',
        value:
          'test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11',
      },
      { createAt: '2024-01-03T11:01', id: '21', value: 'test 21' },
      { createAt: '2024-01-03T21:01', id: '12', value: 'test 12' },
      { createAt: '2024-01-03T19:01', id: '22', value: 'test 22' },
      { createAt: '2024-01-03T23:01', id: '23', value: 'test 23' },
    ],
  },
  {
    date: '2024-01-04',
    history: [
      { createAt: '2024-01-04T01:01', id: '3', value: 'test 3' },
      { createAt: '2024-01-04T01:01', id: '4', value: 'test 4' },
      { createAt: '2024-01-04T11:01', id: '7', value: 'test 7' },
    ],
  },
  {
    date: '2024-01-05',
    history: [
      { createAt: '2024-01-05T11:01', id: '5', value: 'test 5' },
      { createAt: '2024-01-05T19:01', id: '6', value: 'test 6' },
    ],
  },
];

const MainPage = () => {
  const writeInput = useInput({ id: 'write-input' });

  const [selectedTab, setSelectedTab] = useState('끄적이는');

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  const backgroundColor =
    selectedTab === '참고하는' ? COLORS['Grey/100'] : undefined;

  const b = useGetWriteHistory();

  console.log(b);

  return (
    <Layout backgroundColor={backgroundColor}>
      <MainPageTab
        write={
          <div className={styles.container}>
            <div className={styles.content}>
              <WriteGuide />
              <TemporalMemoHistoryTable data={MOCK} />
              <WriteInput inputProps={writeInput} />
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
