import { UseInputReturn } from '@hooks/useInput';

interface BaseInputProps extends Omit<HTMLInputElement, keyof UseInputReturn> {
  controlledInputProps: UseInputReturn;
}

const BaseInput = ({ id, controlledInputProps }: BaseInputProps) => {
  return (
    <label htmlFor={id}>
      <input id={id} {...controlledInputProps} />
    </label>
  );
};

export default BaseInput;
