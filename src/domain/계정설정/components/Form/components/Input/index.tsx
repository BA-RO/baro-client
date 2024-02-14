import { type FC, type HTMLProps } from 'react';

import Icon from '@components/Icon';
import { type UseInputReturn } from '@hooks/useInput';

import * as styles from './index.css';

interface ProfileFormInputProps {
  inputProps: UseInputReturn;
  title: string;
  placeholder: string;
  errorMsg: string | null;
}

const ProfileFormInput: FC<
  Omit<HTMLProps<HTMLInputElement>, keyof ProfileFormInputProps> &
    ProfileFormInputProps
> = ({ inputProps, title, placeholder, errorMsg, onBlur }) => {
  return (
    <label htmlFor={inputProps.id}>
      <p className={styles.inputTitle}>{title}</p>
      <input
        {...inputProps}
        className={styles.input({
          hasError: errorMsg !== null && errorMsg.length > 0,
        })}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {errorMsg && errorMsg.length > 0 ? (
        <div className={styles.errorMsg}>
          <Icon icon={'error'} width={20} height={20} />
          <p>{errorMsg}</p>
        </div>
      ) : null}
    </label>
  );
};

export default ProfileFormInput;
