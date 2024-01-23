import { type PropsWithChildren } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
