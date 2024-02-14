import Dropdown from '@components/Dropdown';
import Icon from '@components/Icon';

import * as styles from '../style.css';

const ProfileButton = () => {
  return (
    <Dropdown
      className={styles.dialogWrapper}
      size="medium"
      placement="bottom-right"
      fixed
    >
      <Dropdown.Trigger className={styles.profile}>
        <Icon icon="profileHeader" width={28} height={28} />
      </Dropdown.Trigger>
      <Dropdown.List>
        <Dropdown.Title>
          <Icon icon="profileDialog" width={40} height={40} />
          <span className={styles.profileName}>바로님</span>
        </Dropdown.Title>
        <Dropdown.Item onClick={() => {}}>
          <Icon icon="setting" width={20} height={20} />
          <span className={styles.buttonText}>계정 설정</span>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>
          <Icon icon="logout" width={20} height={20} />
          <span className={styles.buttonText}>로그아웃</span>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default ProfileButton;
