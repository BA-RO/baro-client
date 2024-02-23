import { useState } from 'react';

import Layout from '@components/Layout';
import MainPageTab from '@components/Layout/MainPageTab';
import WriteTabContent from '@domain/끄적이는/components/WriteTabContent';
import 참고하는TabContent from '@domain/참고하는/components';
import useGetMyProfile from '@queries/useGetMyProfile';
import { COLORS } from '@styles/tokens';

const MainPage = () => {
  useGetMyProfile();

  const [selectedTab, setSelectedTab] = useState('끄적이는');

  const handleTabSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  const backgroundColor =
    selectedTab === '참고하는' ? COLORS['Grey/100'] : undefined;

  return (
    <Layout backgroundColor={backgroundColor}>
      <MainPageTab
        write={<WriteTabContent />}
        refer={<참고하는TabContent />}
        selectedTab={selectedTab}
        handleTabSelect={handleTabSelect}
      />
    </Layout>
  );
};

export default MainPage;
