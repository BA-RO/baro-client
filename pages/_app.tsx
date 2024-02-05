import type { AppProps } from 'next/app';

import '@styles/global.css';

import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast';
import { pretendard } from '@styles/font';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={pretendard.className}>
      <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <Toast />
        <Modal />
      </TanstackQueryProvider>
    </div>
  );
};

export default App;
