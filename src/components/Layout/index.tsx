import { type PropsWithChildren } from 'react';

import { type HeaderType } from '@models/layout';

import Footer from './components/Footer';
import Header from './components/Header';

interface LayoutProps {
  isHeader?: boolean;
  headerType?: HeaderType;
  isFooter?: boolean;
}

const Layout = ({
  children,
  isHeader = true,
  headerType = 'normal',
  isFooter = false,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {isHeader && <Header type={headerType} />}
      {children}
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
