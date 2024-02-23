import Link from 'next/link';
import Cookies from 'js-cookie';

import Logo from '@assets/images/logo.svg';
import { ROUTES } from '@constants/routes';
import { type HeaderType } from '@models/layout';
import { STORAGE_KEY } from '@models/storage';

import * as styles from '../style.css';
import LoginButton from './LoginButton';
import UserButton from './UserButton';

interface HeaderProps {
  type: HeaderType;
}

const Header = ({ type }: HeaderProps) => {
  const refreshToken = Cookies.get(STORAGE_KEY.REFRESH_TOKEN);

  const HeaderButtonGroup = () =>
    type === 'landing' ? <LoginButton /> : <UserButton />;

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
