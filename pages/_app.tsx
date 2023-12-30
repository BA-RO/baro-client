import type { AppProps } from 'next/app';
import '@styles/global.css';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';

import Toast from '@components/Toast/Toast';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
      <Toast />
    </TanstackQueryProvider>
  );
};

export default App;
