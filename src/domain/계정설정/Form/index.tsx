import { useMemo } from 'react';

import Icon from '@components/Icon';
import { useInput } from '@hooks/useInput';

import ProfileFormInput from './components/Input';
import * as styles from './index.css';

interface ProfileFormProps {
  name: string;
  nickname: string;
  authType: string;
  email: string;
}

const ProfileForm = ({ name, nickname, authType, email }: ProfileFormProps) => {
  const nameInputProps = useInput({ id: 'name', defaultValue: name });
  const nicknameInputProps = useInput({
    id: 'nickname',
    defaultValue: nickname,
  });

  const authTypeIcon = useMemo(() => {
    switch (authType) {
      case 'kakao':
        return <Icon icon={'kakao2'} width={32} height={32} />;
      case 'naver':
        return <Icon icon={'naver2'} width={32} height={32} />;
      case 'google':
        return <Icon icon={'google2'} width={32} height={32} />;
      default:
        return null;
    }
  }, [authType]);

  return (
    <form className={styles.container}>
      <ProfileFormInput
        inputProps={nameInputProps}
        title={'이름'}
        placeholder={'이름을 입력해주세요'}
        errorMsg={null}
      />
      <ProfileFormInput
        inputProps={nicknameInputProps}
        title={'별명'}
        placeholder={'별명을 입력해주세요'}
        errorMsg={null}
      />
      <div className={styles.authContainer}>
        {authTypeIcon}
        <p className={styles.authTypeEmail}>{email}</p>
      </div>
      <input type="submit" value="저장하기" className={styles.submitButton} />
    </form>
  );
};

export default ProfileForm;
