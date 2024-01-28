import Button from '@components/Button';
import { useModalStore } from '@stores/modal';

import * as styles from '../style.css';

const IntroHeaderButton = () => {
  const { openModal } = useModalStore();

  const onClick바로시작하기 = () => openModal('login');

  return (
    <Button className={styles.startButton} onClick={onClick바로시작하기}>
      바로 시작하기
    </Button>
  );
};

export default IntroHeaderButton;
