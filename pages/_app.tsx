import type { AppProps } from 'next/app';
import Layout from '@components/Layout/Layout';
import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast/Toast';
import { pretendard } from '@styles/font';

import '@styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={pretendard.className}>
      <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
          <Toast />
          <Modal />
        </Layout>
      </TanstackQueryProvider>
    </main>
  );
};

export default App;
