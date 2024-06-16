import type { AppProps } from 'next/app';

import 'react-notion-x/src/styles.css';
import '@styles/global.css';

import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import SEO from '@components/SEO';
import Toast from '@components/Toast';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEO />
      <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <Toast />
        <Modal />
        <GoogleAnalytics gaId="G-ZERTH34CXV" />
        <GoogleTagManager gtmId="GTM-5623DKMD" />
      </TanstackQueryProvider>
    </>
  );
};

export default App;
