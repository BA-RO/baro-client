import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

import Layout from '@/src/components/Layout/Layout';
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
        </Layout>
      </TanstackQueryProvider>
    </main>
  );
};

export default App;
