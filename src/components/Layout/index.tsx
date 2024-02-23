import { type PropsWithChildren, useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { type HeaderType } from '@models/layout';
import { STORAGE_KEY } from '@models/storage';
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
  const [type, setType] = useState<HeaderType>('landing');

  useEffect(() => {
    const accessToken = localStorage?.getItem(STORAGE_KEY.ACCESS_TOKEN);
    const headerType = accessToken ? 'normal' : 'landing';
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
