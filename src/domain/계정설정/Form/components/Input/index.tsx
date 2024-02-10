import { type FC } from 'react';

import { type UseInputReturn } from '@hooks/useInput';

import * as styles from './index.css';

interface ProfileFormInputProps {
  inputProps: UseInputReturn;
  title: string;
}

const ProfileFormInput: FC<ProfileFormInputProps> = ({ inputProps, title }) => {
  return (
    <label htmlFor={inputProps.id}>
      <p>{title}</p>
      <input {...inputProps} className={styles.container} />
    </label>
  );
};

export default ProfileFormInput;
