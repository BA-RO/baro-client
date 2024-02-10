import { type FC } from 'react';

import { type UseInputReturn } from '@hooks/useInput';

import * as styles from './index.css';

interface ProfileFormInputProps {
  inputProps: UseInputReturn;
  title: string;
  placeholder: string;
  errorMsg: string | null;
}

const ProfileFormInput: FC<ProfileFormInputProps> = ({
  inputProps,
  title,
  placeholder,
  errorMsg,
}) => {
  return (
    <label htmlFor={inputProps.id}>
      <p className={styles.inputTitle}>{title}</p>
      <input
        {...inputProps}
        className={styles.input}
        placeholder={placeholder}
      />
      {errorMsg !== null && <p>{errorMsg}</p>}
    </label>
  );
};

export default ProfileFormInput;
