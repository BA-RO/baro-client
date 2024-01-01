import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MAIN_INPUT_MAX_LENGTH } from '@/src/constants/config';
import type { UseInputReturn } from '@/src/hooks/useInput';

import * as style from './style.css';
import { inputHeight } from './style.css';

type InputType = 'primary' | 'create';

interface ControlledInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  type: InputType;
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
}

const ControlledInput = ({
  type,
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
}: ControlledInputProps) => {
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      console.log(
        height,
        inputRef.current.scrollHeight,
        inputRef.current.style.height,
      );

      setHeight(inputRef.current.scrollHeight);
    }
  }, [height, value]);

  return (
    <label htmlFor={id}>
      <textarea
        {...inputProps}
        ref={inputRef}
        style={assignInlineVars({ [inputHeight]: `${height}px` })}
        className={style.input({ type })}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </label>
  );
};

export default ControlledInput;
