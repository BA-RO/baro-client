import { UseInputReturn } from '@hooks/useInput';
import { FocusEventHandler, ReactNode } from 'react';
import { defaultInputStyle, defaultLabelStyle } from './style.css';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

interface ControlledInputProps {
  inputProps: UseInputReturn;

  placeholder?: string;
  maxLength?: number;

  inputClassName?: string;
  postfix?: ReactNode;

  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

const ControlledInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  inputClassName = defaultInputStyle,
  postfix,
  onFocus,
  onBlur,
}: ControlledInputProps) => (
  <label htmlFor={inputProps.id}>
    <div className={defaultLabelStyle}>
      <textarea
        {...inputProps}
        name={inputProps.id}
        placeholder={placeholder}
        maxLength={maxLength}
        className={inputClassName}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {postfix}
    </div>
  </label>
);

export default ControlledInput;
