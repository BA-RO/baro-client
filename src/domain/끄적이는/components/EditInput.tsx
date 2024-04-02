import { useEffect, useRef } from 'react';

import { WRITE_INPUT_MAX_LENGTH } from '@constants/config';
import { type UseInputReturn } from '@hooks/useInput';

import * as styles from './editInput.css';

interface EditInputProps {
  inputProps: UseInputReturn;
}

const EditInput = ({ inputProps }: EditInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    if (!inputRef.current) return;

    inputRef.current.setAttribute('style', 'height: 0px');
    inputRef.current.setAttribute(
      'style',
      `height: ${inputRef.current.scrollHeight}px`,
    );
  };

  return (
    <div className={styles.editContainer}>
      <textarea
        {...inputProps}
        ref={inputRef}
        className={styles.editInput}
        autoComplete="off"
        maxLength={WRITE_INPUT_MAX_LENGTH}
        onInput={handleResize}
      />
      <p className={styles.editInputTextCount}>
        <span className={styles.editTextCurrentCount}>
          {inputProps.value.length}&nbsp;
        </span>
        /&nbsp;500
      </p>
    </div>
  );
};

export default EditInput;
