import Link from 'next/link';

import Logo from '@assets/images/logo.svg';
import { ROUTES } from '@constants/routes';
import { type HeaderType } from '@models/layout';

import * as styles from '../style.css';
import LoginButton from './LoginButton';
import UserButton from './UserButton';

interface HeaderProps {
  type: HeaderType;
}

const Header = ({ type }: HeaderProps) => {
  const HeaderButtonGroup = () =>
    type === 'intro' ? <LoginButton /> : <UserButton />;

  return (
    <header className={styles.header}>
      <Link href={ROUTES.LANDING} className={styles.logo}>
        <Logo />
      </Link>
      <HeaderButtonGroup />
    </header>
  );
};

export default Header;
