import { UseInputReturn } from '@hooks/useInput';
import {
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
  useCallback,
  useState,
} from 'react';
import * as style from './style.css';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

interface ControlledInputProps {
  type: '1' | '2';
  inputProps: UseInputReturn;
  postfix?: ReactNode;
  placeholder?: string;
  maxLength?: number;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

const ControlledInput = ({
  type,
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  postfix,
  onFocus,
  onBlur,
}: ControlledInputProps) => {
  const { id, value, onChange } = inputProps;
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLTextAreaElement, Element>) => {
      setIsFocus(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLTextAreaElement, Element>) => {
      setIsFocus(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  return (
    <label htmlFor={id}>
      <article>
        <textarea
          {...inputProps}
          className={style.input({ type, focus: isFocus })}
          rows={value.length === 0 ? 1 : Math.ceil(value.length / 190)}
          name={id}
          placeholder={placeholder}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
        />
        {postfix}
      </article>
    </label>
  );
};

export default ControlledInput;
