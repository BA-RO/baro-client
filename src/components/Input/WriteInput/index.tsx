import type { ChangeEvent, HTMLAttributes, KeyboardEvent } from 'react';
import { useMemo, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MAIN_INPUT_MAX_LENGTH } from '@/src/constants/config';
import type { UseInputReturn } from '@/src/hooks/useInput';
import { COLORS } from '@/src/styles/tokens';

import Icon from '../../SvgIcon';
import * as style from './style.css';

interface WriteInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
}

const WriteInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
}: WriteInputProps) => {
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [textareaHeight, setTextareaHeight] = useState({
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

  const onKeydownEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length]: true },
      }));
    }
  };

  const isValid = useMemo(() => value.length > 0, [value.length]);

  return (
    <div className={style.conatiner}>
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
            onKeyDown={onKeydownEnter}
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
            <button disabled={!isValid}>
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
    </div>
  );
};

export default WriteInput;
