import { useRouter } from 'next/navigation';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';
import { COLORS } from '@styles/tokens';

import * as styles from '../style.css';
import ProfileButton from './ProfileButton';

const UserButton = () => {
  const router = useRouter();

  return (
    <div className={styles.userButton}>
      <Button
        onClick={() => {
          router.push(ROUTES.ARCHIVE);
        }}
        className={styles.archive}
      >
        <Icon icon="bookmark" color={COLORS['Grey/400']} />
      </Button>
      <ProfileButton />
    </div>
  );
};

export default UserButton;
