import { UseInputReturn } from '@hooks/useInput';
import { FocusEventHandler, ReactNode } from 'react';

interface ControlledInputProps {
  inputProps: UseInputReturn;

  labelClassName?: string;
  inputClassName?: string;
  postfix?: ReactNode;

  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const ControlledInput = ({
  inputProps,
  labelClassName,
  inputClassName,
  postfix,
  onFocus,
  onBlur,
}: ControlledInputProps) => {
  return (
    <label htmlFor={inputProps.id} className={labelClassName}>
      <input
        {...inputProps}
        name={inputProps.id}
        className={inputClassName}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {postfix}
    </label>
  );
};

export default ControlledInput;
