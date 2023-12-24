import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

import TanstackQueryProvider from '@/src/components/Providers/TanstackQueryProvider';
import { pretendard } from '@/src/styles/font';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={pretendard.className}>
      <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </TanstackQueryProvider>
    </main>
  );
};

export default App;
