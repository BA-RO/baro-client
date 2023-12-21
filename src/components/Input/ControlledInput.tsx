import { UseInputReturn } from '@hooks/useInput';
import {
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  activeInputStyle,
  inputContainerStyle,
  noneValueInputStyle,
} from './style.css';
import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

interface ControlledInputProps {
  inputProps: UseInputReturn;
  postfix?: ReactNode;
  placeholder?: string;
  maxLength?: number;
  containerStyle?: string;
  inputStyle?: string;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

const ControlledInput = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  containerStyle = inputContainerStyle,
  inputStyle,
  postfix,
  onFocus,
  onBlur,
}: ControlledInputProps) => {
  const { value } = inputProps;
  const [isFocus, setIsFocus] = useState(false);

  const style = useMemo(() => {
    if (containerStyle) {
      return containerStyle;
    } else {
      if (isFocus || value.length > 0) {
        return activeInputStyle;
      }

      return noneValueInputStyle;
    }
  }, [isFocus, value]);

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
    <label htmlFor={inputProps.id}>
      <article className={containerStyle}>
        <textarea
          {...inputProps}
          rows={value.length === 0 ? 1 : Math.ceil(value.length / 190)}
          name={inputProps.id}
          placeholder={placeholder}
          maxLength={maxLength}
          className={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {postfix}
      </article>
    </label>
  );
};

export default ControlledInput;
