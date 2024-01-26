import { type PropsWithChildren } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

interface LayoutProps {
  isHeader?: boolean;
  isFooter?: boolean;
}

const Layout = ({
  children,
  isHeader = true,
  isFooter = false,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
