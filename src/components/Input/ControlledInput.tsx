import { UseInputReturn } from '@hooks/useInput';
import {
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
  useCallback,
  useState,
  HTMLAttributes,
  useRef,
  useEffect,
} from 'react';
import * as style from './style.css';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { inputHeight } from './style.css';

type InputType = 'primary' | 'create';

interface ControlledInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  type: InputType;
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
  showCount?: boolean;
}

const ControlledInput = ({
  type,
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  showCount = false,
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
  }, [value]);

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
