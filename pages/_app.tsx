import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'react-notion-x/src/styles.css';
import '@styles/global.css';

import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast';
import { GoogleAnalytics } from '@next/third-parties/google';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="바로 잡아 바로 쓰는, 바로" />
        <meta name="keyword" content="baro 바로" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ba-ro.co.kr" />
        <meta property="og:title" content="바로" />
        <meta
          property="og:image"
          content="https://image.ba-ro.co.kr/ba-ro.png"
        />
        <meta property="og:description" content="바로 잡아 바로 쓰는, 바로" />
        <meta property="og:site_name" content="baro" />
        <title>바로 잡아 바로 쓰는, 바로</title>
      </Head>
      <Component {...pageProps} />
      <Toast />
      <Modal />
      <GoogleAnalytics gaId="G-FE8WVNGY6S" />
    </TanstackQueryProvider>
  );
};

export default App;
