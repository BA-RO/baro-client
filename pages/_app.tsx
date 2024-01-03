import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

import Layout from '@/src/components/Layout/Layout';
import Modal from '@/src/components/Modal/Modal';
import TanstackQueryProvider from '@/src/components/Providers/TanstackQueryProvider';
import Toast from '@/src/components/Toast/Toast';
import { pretendard } from '@/src/styles/font';

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
