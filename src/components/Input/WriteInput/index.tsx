import type { HTMLAttributes, KeyboardEvent } from 'react';
import { useMemo, useRef } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';
import type { UseInputReturn } from '@hooks/useInput';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

interface WriteInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  inputProps: Omit<UseInputReturn, 'reset'>;
  placeholder?: string;
  maxLength?: number;
  onSubmit: VoidFunction;
}

const WriteInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  onSubmit,
}: WriteInputProps) => {
  const { id, value, onChange } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const isValid = useMemo(() => value.length > 0, [value.length]);

  const handleResize = () => {
    if (!inputRef.current) return;
    inputRef.current.setAttribute('style', 'height: 0px');
    inputRef.current.setAttribute(
      'style',
      `height: ${inputRef.current.scrollHeight}px`,
    );
  };

  const handleKeydownEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing || !inputRef.current) return;

    if (e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      inputRef.current.setAttribute('style', 'height: 27px');
      onSubmit();
    }
  };

  return (
    <form className={styles.conatiner}>
      <div className={styles.contentWrapper}>
        <label htmlFor={id} className={styles.label}>
          <textarea
            id={id}
            value={value}
            ref={inputRef}
            autoComplete="off"
            className={styles.input}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            onInput={handleResize}
            onKeyDown={handleKeydownEnter}
          />
        </label>

        <div className={styles.submitWrapper}>
          <div className={styles.submit}>
            {value.length > 0 && (
              <span className={styles.textCount}>
                <span className={styles.currentTextCount}>{value.length}</span>
                &nbsp;/&nbsp;500자
              </span>
            )}
            <Button type="button" disabled={!isValid} onClick={onSubmit}>
              <Icon
                icon="submit"
                width={48}
                height={48}
                color={isValid ? COLORS['Blue/Default'] : undefined}
              />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WriteInput;
