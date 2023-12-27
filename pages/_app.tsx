import type { AppProps } from 'next/app';
import '@styles/global.css';
import TanstackQueryProvider from '@components/Providers/TanstackQueryProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TanstackQueryProvider dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  );
};

export default App;
