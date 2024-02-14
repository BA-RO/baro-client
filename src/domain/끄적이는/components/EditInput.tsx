import { type ChangeEvent, type KeyboardEvent, useRef, useState } from 'react';

import { type UseInputReturn } from '@hooks/useInput';

import * as styles from './editInput.css';

interface EditInputProps {
  inputProps: UseInputReturn;
}

const EditInput = ({ inputProps }: EditInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [textareaHeight, setTextareaHeight] = useState<{
    row: number;
    lineBreak: Record<number, boolean>;
  }>({
    row: 1,
    lineBreak: {},
  });

  const handleResize = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight, value } = e.target;

    if (value.length === 0) {
      setTextareaHeight((prev) => ({
        row: 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: false },
      }));
    }

    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const handleKeydownEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [inputProps.value.length]: true },
      }));
      return;
    }
  };

  return (
    <div className={styles.editContainer}>
      <textarea
        {...inputProps}
        ref={inputRef}
        className={styles.editInput}
        autoComplete="off"
        rows={textareaHeight.row}
        maxLength={500}
        onInput={handleResize}
        onKeyDown={handleKeydownEnter}
      />
      <p className={styles.editInputTextCount}>
        <span className={styles.editTextCurrentCount}>
          {inputProps.value.length}
        </span>
        / 500
      </p>
    </div>
  );
};

export default EditInput;
