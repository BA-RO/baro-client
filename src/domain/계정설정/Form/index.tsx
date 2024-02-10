import { useInput } from '@hooks/useInput';

import ProfileFormInput from './components/Input';
import * as styles from './index.css';

const ProfileForm = () => {
  const nameInputProps = useInput({ id: 'name' });
  const nicknameInputProps = useInput({ id: 'nickname' });

  return (
    <form className={styles.container}>
      <ProfileFormInput inputProps={nameInputProps} title={'이름'} />
      <ProfileFormInput inputProps={nicknameInputProps} title={'별명'} />
      <div>로그인 타입 관련 처리</div>
      <input type="submit" value="저장하기" className={styles.submitButton} />
    </form>
  );
};

export default ProfileForm;
