import { type PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { type HeaderType } from '@models/layout';
import { COLORS } from '@styles/tokens';

import Footer from './components/Footer';
import Header from './components/Header';
import * as styles from './style.css';

interface LayoutProps {
  isShowHeader?: boolean;
  headerType?: HeaderType;
  isShowFooter?: boolean;
  backgroundColor?: string;
}

const Layout = ({
  children,
  isShowHeader = true,
  headerType = 'normal',
  isShowFooter = false,
  backgroundColor = COLORS['Grey/White'],
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {isShowHeader && <Header type={headerType} />}
      <main
        className={styles.mainWrapper}
        style={assignInlineVars({
          [styles.backgroundColorMain]: backgroundColor,
        })}
      >
        {children}
      </main>
      {isShowFooter && <Footer />}
    </>
  );
};

export default Layout;
