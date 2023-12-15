import type { AppProps } from 'next/app';

import '@/src/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
