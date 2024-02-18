import { useRouter } from 'next/router';

import Empty from '@assets/images/empty.svg';
import Button from '@components/Button';
import { ROUTES } from '@constants/routes';

import * as styles from './style.css';

const NotFoundArchiveCard = () => {
  const router = useRouter();

  return (
    <div className={styles.notFound}>
      <Empty />
      <div className={styles.message}>
        <p className={styles.title}>아직 저장한 글이 없어요!</p>
        <span className={styles.description}>
          자주 사용하는 글과 템플릿을 저장해보세요.
        </span>
      </div>
      <Button state="enabled" size="M" onClick={() => router.push(ROUTES.MAIN)}>
        문장 템플릿 보러가기
      </Button>
    </div>
  );
};

export default NotFoundArchiveCard;
