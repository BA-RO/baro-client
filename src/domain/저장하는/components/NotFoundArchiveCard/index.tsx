import Empty from '@assets/images/empty.svg';
import Button from '@components/Button';

import * as styles from './style.css';

const NotFoundArchiveCard = () => {
  return (
    <div className={styles.notFound}>
      <Empty />
      <div className={styles.message}>
        <p className={styles.title}>아직 저장한 글이 없어요!</p>
        <span className={styles.description}>
          자주 사용하는 글과 템플릿을 저장해보세요.
        </span>
      </div>
      <Button state="enabled" size="M">
        문장 템플릿 보러가기
      </Button>
    </div>
  );
};

export default NotFoundArchiveCard;
