import { useRouter, useSearchParams } from 'next/navigation';

import Layout from '@components/Layout';
import MainPageTab from '@components/Layout/MainPageTab';
import { ROUTES } from '@constants/routes';
import WriteTabContent from '@domain/끄적이는/components/WriteTabContent';
import 참고하는TabContent from '@domain/참고하는/components';
import useGetMyProfile from '@queries/useGetMyProfile';
import { COLORS } from '@styles/tokens';

const MainPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTab = searchParams.get('tab') || 'write';

  useGetMyProfile();

  const handleTabSelect = (selectedTab: string) => {
    router.push(`${ROUTES.MAIN}?tab=${selectedTab}`);
  };

  const backgroundColor =
    selectedTab === 'refer' ? COLORS['Grey/100'] : undefined;

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
