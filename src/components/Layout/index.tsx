import { type PropsWithChildren, useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { type HeaderType } from '@models/layout';
import { COLORS } from '@styles/tokens';

import Footer from './components/Footer';
import Header from './components/Header';
import * as styles from './style.css';

interface LayoutProps {
  isHeader?: boolean;
  isFooter?: boolean;
  backgroundColor?: string;
}

const Layout = ({
  children,
  isHeader = true,
  isFooter = false,
  backgroundColor = COLORS['Grey/White'],
}: PropsWithChildren<LayoutProps>) => {
  const [type, setType] = useState<HeaderType>('intro');

  useEffect(() => {
    const accessToken = localStorage?.getItem('accessToken');
    const headerType = accessToken ? 'normal' : 'intro';
    setType(headerType);
  }, []);

  return (
    <>
      {isHeader && <Header type={type} />}
      <main
        className={styles.mainWrapper}
        style={assignInlineVars({
          [styles.backgroundColorMain]: backgroundColor,
        })}
      >
        {children}
      </main>
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
