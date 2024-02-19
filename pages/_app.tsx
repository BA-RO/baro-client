import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'react-notion-x/src/styles.css';
import '@styles/global.css';

import Modal from '@components/Modal';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';
import Toast from '@components/Toast';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Head>
        <link
          rel="icon"
          href="/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="description" content="baro 설명" />
        <meta name="keyword" content="baro 바로" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ba-ro.co.kr" />
        <meta property="og:title" content="바로 잡아 바로 쓰는, 바로" />
        <meta property="og:image" content="/images/baro.png" />
        <meta property="og:description" content="baro 설명" />
        <meta property="og:site_name" content="baro" />
        <title>바로 잡아 바로 쓰는, 바로</title>
      </Head>
      <Component {...pageProps} />
      <Toast />
      <Modal />
    </TanstackQueryProvider>
  );
};

export default App;
