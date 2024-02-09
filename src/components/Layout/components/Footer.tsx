import Link from 'next/link';

import Button from '@components/Button';
import Icon from '@components/Icon';

import * as styles from '../style.css';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div>
        <div>
          <Button className={styles.footerButton}>서비스메일</Button>
          <Link href="/" className={styles.footerLink}>
            이용약관
          </Link>
          <Link href="/" className={styles.footerLink}>
            개인정보보호방침
          </Link>
        </div>
        <Button className={styles.instagramButton}>
          <div className={styles.instagramIcon}>
            <Icon icon="instagram" />
          </div>
          <span className={styles.instagramText}>인스타그램</span>
        </Button>
      </div>
      <div>
        <div className={styles.baroIcon}>
          <Icon icon="logo32" width={32} height={36} />
        </div>
        <span className={styles.copyright}>
          &copy;2024. Baro All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
