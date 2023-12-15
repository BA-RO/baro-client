import { UseInputReturn } from '@hooks/useInput';
import { FocusEventHandler, ReactNode } from 'react';

interface BaseInputProps {
  inputProps: UseInputReturn;

  labelClassName?: string;
  inputClassName?: string;
  postfix?: ReactNode;

  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const BaseInput = ({
  inputProps,
  labelClassName,
  inputClassName,
  postfix,
  onFocus,
  onBlur,
}: BaseInputProps) => {
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

export default BaseInput;
