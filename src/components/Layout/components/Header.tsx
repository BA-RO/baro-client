import Link from 'next/link';
import { type MouseEvent, useState } from 'react';

import Logo from '@assets/images/logo.svg';
import Button from '@components/Button';
import Icon from '@components/Icon';

import * as styles from '../style.css';
import ProfileDialog from './ProfileDialog';

const Header = () => {
  const [showProfileDialog, setShowProfileDialog] = useState(false);

  const handleProfileClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowProfileDialog(!showProfileDialog);
  };

  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.iconsWrapper}>
          <Link href="/" className={styles.bookmark}>
            <Icon icon="bookmarkHeader" />
          </Link>
          <Button className={styles.profile} onClick={handleProfileClick}>
            <div className={styles.circle28}>
              <Icon icon="profileHeader" width={16} height={16} />
            </div>
          </Button>
        </div>
      </div>
      {showProfileDialog && (
        <ProfileDialog closeDialog={() => setShowProfileDialog(false)} />
      )}
    </>
  );
};

export default Header;
