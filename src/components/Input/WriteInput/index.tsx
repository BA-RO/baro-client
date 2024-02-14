import type { ChangeEvent, HTMLAttributes, KeyboardEvent } from 'react';
import { useMemo, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import Icon from '@components/Icon';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';
import type { UseInputReturn } from '@hooks/useInput';
import { COLORS } from '@styles/tokens';

import * as style from './style.css';

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
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [textareaHeight, setTextareaHeight] = useState<{
    row: number;
    lineBreak: Record<number, boolean>;
  }>({
    row: 1,
    lineBreak: {},
  });

  const isValid = useMemo(() => value.length > 0, [value.length]);

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
        lineBreak: { ...prev.lineBreak, [value.length]: true },
      }));
      return;
    }
  };

  return (
    <form className={style.conatiner}>
      <div
        className={style.contentWrapper}
        style={assignInlineVars({
          [style.inputHeight]: `${textareaHeight.row * 27}px`,
        })}
      >
        <label htmlFor={id} className={style.label}>
          <textarea
            {...inputProps}
            ref={inputRef}
            autoComplete="off"
            rows={textareaHeight.row}
            className={style.input}
            placeholder={placeholder}
            maxLength={maxLength}
            onInput={handleResize}
            onKeyDown={handleKeydownEnter}
          />
        </label>

        <div
          className={style.submitWrapper({
            multirow: textareaHeight.row > 1,
          })}
        >
          <div className={style.submit}>
            {value.length > 0 && (
              <span className={style.textCount}>
                <span className={style.currentTextCount}>{value.length}</span>
                &nbsp;/&nbsp;500자
              </span>
            )}
            <button disabled={!isValid} onClick={onSubmit}>
              <Icon
                icon="submit"
                width={48}
                height={48}
                color={isValid ? COLORS['Blue/Default'] : undefined}
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default WriteInput;
