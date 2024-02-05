import { type PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { type HeaderType } from '@models/layout';
import { COLORS } from '@styles/tokens';

import Footer from './components/Footer';
import Header from './components/Header';
import * as styles from './style.css';

interface LayoutProps {
  isHeader?: boolean;
  headerType?: HeaderType;
  isFooter?: boolean;
  backgroundColor?: string;
}

const Layout = ({
  children,
  isHeader = true,
  headerType = 'normal',
  isFooter = false,
  backgroundColor = COLORS['Grey/White'],
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {isHeader && <Header type={headerType} />}
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
