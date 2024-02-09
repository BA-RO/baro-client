import Link from 'next/link';
import { type MouseEvent } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';

import * as styles from '../style.css';

interface NormalHeaderButtonProps {
  handleProfileClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProfileButton = ({ handleProfileClick }: NormalHeaderButtonProps) => {
  return (
    <>
      <Link href="/" className={styles.bookmark}>
        <Icon icon="bookmarkHeader" />
      </Link>
      <Button className={styles.profile} onClick={handleProfileClick}>
        <div className={styles.circle28}>
          <Icon icon="profileHeader" width={16} height={16} />
        </div>
      </Button>
    </>
  );
};

export default ProfileButton;
