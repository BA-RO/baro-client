import Link from 'next/link';

import { type OAuthType } from '@api/auth/types';
import Hello from '@assets/images/Hello.svg';
import Button from '@components/Button';
import Icon from '@components/Icon';
import ModalContainer from '@components/Modal/components/ModalContainer';
import { ROUTES } from '@constants/routes';
import useLogin from '@queries/useLogin';

import * as styles from '../style.css';

const buttons = [
  {
    type: 'google',
    name: '구글',
    wrapperClassName: styles.googleLogin,
    iconClassName: styles.googleIcon,
    iconWidth: 18,
    iconHeight: 18,
  },
  {
    type: 'naver',
    name: '네이버',
    wrapperClassName: styles.naverLogin,
    iconClassName: styles.naverIcon,
    iconWidth: 15,
    iconHeight: 14,
  },
  {
    type: 'kakao',
    name: '카카오',
    wrapperClassName: styles.kakaoLogin,
    iconClassName: styles.kakaoIcon,
    iconWidth: 19,
    iconHeight: 18,
  },
] as const;

const Login = () => {
  const { mutateAsync } = useLogin();

  const handleSocialLoginClick = (type: OAuthType) => async () => {
    const data = await mutateAsync(type);

    if (!data.url) return;
    window.location.href = data.url;
  };

  const recentLoginType = localStorage.getItem('recentLoginType');

  return (
    <ModalContainer type="login">
      <div className={styles.helloImage}>
        <Hello />
      </div>
      <div className={styles.loginTitleWrapper}>
        <span className={styles.loginTitle}>
          바로 <span className={styles.loginTitleBlack}>시작하기</span>
        </span>
        <span className={styles.loginDescription}>
          지금 로그인하고 문장을 검증하고 참고해보세요!
        </span>
      </div>
      <div className={styles.loginButtonsWrapper}>
        {buttons.map(
          ({
            type,
            name,
            wrapperClassName,
            iconClassName,
            iconWidth,
            iconHeight,
          }) => (
            <Button
              key={type}
              className={wrapperClassName({ recent: recentLoginType === type })}
              onClick={handleSocialLoginClick(type)}
            >
              <div className={iconClassName}>
                <Icon icon={type} width={iconWidth} height={iconHeight} />
              </div>
              {name}로 로그인하기
              {recentLoginType === type && (
                <span className={styles.recentLoginMessage}>
                  마지막으로 로그인했어요!
                </span>
              )}
            </Button>
          ),
        )}
      </div>
      <div className={styles.agreeDescription}>
        로그인은&nbsp;
        <Link href={ROUTES.PRIVACY} className={styles.agreeLink}>
          개인정보처리방침
        </Link>
        과&nbsp;
        <Link href={ROUTES.USE} className={styles.agreeLink}>
          이용약관
        </Link>
        에 동의하는 것을 의미합니다.
      </div>
    </ModalContainer>
  );
};

export default Login;
