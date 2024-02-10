import { useInput } from '@hooks/useInput';

import ProfileFormInput from './components/Input';
import * as styles from './index.css';

const ProfileForm = () => {
  const nameInputProps = useInput({ id: 'name' });
  const nicknameInputProps = useInput({ id: 'nickname' });

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
      <div>로그인 타입 관련 처리</div>
      <input type="submit" value="저장하기" className={styles.submitButton} />
    </form>
  );
};

export default ProfileForm;
