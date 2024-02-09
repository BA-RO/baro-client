import type { AppProps } from 'next/app';

import '@styles/global.css';

import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <Toast />
        <Modal />
      </TanstackQueryProvider>
    </>
  );
};

export default App;
