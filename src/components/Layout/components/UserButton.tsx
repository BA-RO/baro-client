import Link from 'next/link';

import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@styles/tokens';

import * as styles from '../style.css';
import ProfileButton from './ProfileButton';

const UserButton = () => {
  return (
    <div className={styles.userButton}>
      <Link href={ROUTES.ARCHIVE} className={styles.archive}>
        <Icon icon="bookmark" color={COLORS['Grey/400']} />
      </Link>
      <ProfileButton />
    </div>
  );
};

export default UserButton;
