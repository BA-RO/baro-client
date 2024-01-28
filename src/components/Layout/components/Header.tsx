import Link from 'next/link';
import { type MouseEvent, useState } from 'react';

import Logo from '@assets/images/logo.svg';
import { type HeaderType } from '@models/layout';

import * as styles from '../style.css';
import IntroHeaderButton from './IntroHeaderButton';
import NormalHeaderButton from './NormalHeaderButton';
import ProfileDialog from './ProfileDialog';

interface HeaderProps {
  type: HeaderType;
}

const Header = ({ type }: HeaderProps) => {
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  const handleProfileClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowProfileDialog(!showProfileDialog);
  };

  const HeaderButton = () =>
    type === 'intro' ? (
      <IntroHeaderButton />
    ) : (
      <NormalHeaderButton handleProfileClick={handleProfileClick} />
    );

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.buttonsWrapper({ type })}>
          <HeaderButton />
        </div>
      </div>
      {showProfileDialog && (
        <ProfileDialog closeDialog={() => setShowProfileDialog(false)} />
      )}
    </>
  );
};

export default Header;
