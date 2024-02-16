import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { type MyProfile } from '@api/members/types';
import Dropdown from '@components/Dropdown';
import Icon from '@components/Icon';
import { ROUTES } from '@constants/routes';

import * as styles from '../style.css';

const ProfileButton = () => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MyProfile>(['my-profile']);

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken');
    router.push(ROUTES.LANDING);
  };

  return (
    <Dropdown
      className={styles.dialogWrapper}
      size="medium"
      placement="bottom-right"
    >
      <Dropdown.Trigger className={styles.profile}>
        <Icon icon="profileHeader" width={28} height={28} />
      </Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Title>
          <Icon icon="profileDialog" width={40} height={40} />
          <span className={styles.profileName}>{data?.nickname}님</span>
        </Dropdown.Title>
        <Dropdown.Item
          onClick={() => router.push('/profile')}
          className={styles.profileButton}
        >
          <Icon icon="setting" width={20} height={20} />
          <span className={styles.buttonText}>계정 설정</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleLogoutClick}
          className={styles.profileButton}
        >
          <Icon icon="logout" width={20} height={20} />
          <span className={styles.buttonText}>로그아웃</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default ProfileButton;
