import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

import Logo from '@assets/images/logo.svg';
import { ROUTES } from '@constants/routes';
import { STORAGE_KEY } from '@models/storage';

import * as styles from '../style.css';
import LoginButton from './LoginButton';
import UserButton from './UserButton';

const Header = () => {
  const refreshToken = Cookies.get(STORAGE_KEY.REFRESH_TOKEN);

  const pathname = usePathname();

  const HeaderButtonGroup = () =>
    pathname === ROUTES.LANDING ? <LoginButton /> : <UserButton />;

  return (
    <header className={styles.header}>
      <Link
        href={refreshToken ? `${ROUTES.MAIN}?tab=write` : ROUTES.LANDING}
        className={styles.logo}
      >
        <Logo />
      </Link>
      <HeaderButtonGroup />
    </header>
  );
};

export default Header;
