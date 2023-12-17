import { UseInputReturn } from '@hooks/useInput';
import { FocusEventHandler, ReactNode } from 'react';
import { noneValueInputStyle } from './style.css';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

interface ControlledInputProps {
  inputProps: UseInputReturn;
  postfix?: ReactNode;
  placeholder?: string;
  maxLength?: number;
  inputStyle?: string;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

const ControlledInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  inputStyle = noneValueInputStyle,
  postfix,
  onFocus,
  onBlur,
}: ControlledInputProps) => (
  <label htmlFor={inputProps.id}>
    <article>
      <textarea
        {...inputProps}
        name={inputProps.id}
        placeholder={placeholder}
        maxLength={maxLength}
        className={inputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {postfix}
    </article>
  </label>
);

export default ControlledInput;
