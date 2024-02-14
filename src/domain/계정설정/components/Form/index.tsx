import { type FormEvent, useMemo, useState } from 'react';

import Icon from '@components/Icon';
import { useInput } from '@hooks/useInput';

import useUpdateProfile from '../../mutations/useUpdateProfile';
import ProfileFormInput from './components/Input';
import * as styles from './index.css';

interface ProfileFormProps {
  name: string;
  nickname: string;
  authType: string;
  email: string;
}

const ProfileForm = ({ name, nickname, authType, email }: ProfileFormProps) => {
  const { mutate: updateProfile } = useUpdateProfile();

  const nameInputProps = useInput({ id: 'name', defaultValue: name });
  const nicknameInputProps = useInput({
    id: 'nickname',
    defaultValue: nickname,
  });

  const [errors, setErrors] = useState<{
    name: string | null;
    nickname: string | null;
  }>({
    name: null,
    nickname: null,
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

  const hasAlreadyNickname = (value: string) => {
    // TODO: 이미 존재하는지 확인하는 API 요청
    console.log(value);

    return false;
  };

  const nameValidator = (value: string) => {
    if (value.length === 0) {
      setErrors({
        ...errors,
        name: '값을 입력해주세요!',
      });

      return false;
    }

    if (value.length > 30) {
      setErrors({
        ...errors,
        name: '한글, 영문, 밑줄(_)조합으로 30자 내로 적어주세요!',
      });

      return false;
    }

    setErrors({ ...errors, name: null });

    return true;
  };

  const nicknameValidator = (value: string) => {
    if (value.length === 0) {
      setErrors({
        ...errors,
        nickname: '값을 입력해주세요!',
      });

      return false;
    }

    if (value.length > 10) {
      setErrors({
        ...errors,
        nickname: '10자 내로 적어주세요!',
      });

      return false;
    }

    if (hasAlreadyNickname(value)) {
      setErrors({
        ...errors,
        nickname: '이미 사용 중인 폴더 이름이에요!',
      });

      return false;
    }

    setErrors({ ...errors, nickname: null });

    return true;
  };

  const validator = (type: 'name' | 'nickname', value: string) => {
    if (type === 'name') {
      return nameValidator(value);
    }

    if (type === 'nickname') {
      return nicknameValidator(value);
    }

    return false;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      validator('name', nameInputProps.value) &&
      validator('nickname', nicknameInputProps.value)
    ) {
      updateProfile({
        name: nameInputProps.value,
        nickname: nicknameInputProps.value,
      });
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <ProfileFormInput
        inputProps={nameInputProps}
        title={'이름'}
        placeholder={'이름을 입력해주세요'}
        errorMsg={errors ? errors.name : null}
      />
      <ProfileFormInput
        inputProps={nicknameInputProps}
        title={'별명'}
        placeholder={'별명을 입력해주세요'}
        errorMsg={errors ? errors.nickname : null}
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
