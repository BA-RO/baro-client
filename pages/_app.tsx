import type { AppProps } from 'next/app';

import '@styles/global.css';

import Layout from '@components/Layout';
import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast';
import { pretendard } from '@styles/font';

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
