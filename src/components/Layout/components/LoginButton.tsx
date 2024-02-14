import Button from '@components/Button';
import { useModalStore } from '@stores/modal';

import * as styles from '../style.css';

const LoginButton = () => {
  const { openModal } = useModalStore();

  const handleLoginButtonClick = () => openModal('login');

  return (
    <Button className={styles.loginButton} onClick={handleLoginButtonClick}>
      바로 시작하기
    </Button>
  );
};

export default LoginButton;
