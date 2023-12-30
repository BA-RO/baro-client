import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

import TanstackQueryProvider from '@/src/components/Providers/TanstackQueryProvider';
import Toast from '@/src/components/Toast/Toast';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
      <Toast />
    </TanstackQueryProvider>
  );
};

export default App;
