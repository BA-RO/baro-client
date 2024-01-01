import type { AppProps } from 'next/app';
import '@styles/global.css';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast/Toast';
import Layout from '@components/Layout/Layout';
import { pretendard } from '@styles/font';

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
