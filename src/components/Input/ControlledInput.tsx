import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MAIN_INPUT_MAX_LENGTH } from '@/src/constants/config';
import type { UseInputReturn } from '@/src/hooks/useInput';

import * as style from './style.css';
import { inputHeight } from './style.css';

type InputType = 'primary' | 'secondary';
type AlertType = 'error' | 'warn';

interface ControlledInputProps extends HTMLAttributes<HTMLTextAreaElement> {
  type: InputType;
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
  alertType?: AlertType;
  alertMsg?: string;
}

const ControlledInput = ({
  type,
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  alertType,
  alertMsg,
}: ControlledInputProps) => {
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [height, setHeight] = useState(0);

  const alertIconUrl = useMemo(
    () => (type: AlertType) => {
      if (type === 'error') {
        return '/icons/error.svg';
      }

      return '/icons/warn.svg';
    },
    [],
  );

  useEffect(() => {
    if (inputRef.current) {
      setHeight(inputRef.current.scrollHeight);
    }
  }, [height, value]);

  return (
    <label htmlFor={id}>
      <textarea
        {...inputProps}
        ref={inputRef}
        style={assignInlineVars({ [inputHeight]: `${height}px` })}
        className={style.input({ type, error: alertType === 'error' })}
        placeholder={placeholder}
        maxLength={maxLength}
      />

      {alertMsg && (
        <div className={style.alert()}>
          {/* TODO: Svg 공용 아이콘 제작 후 변경 @원진 */}
          {alertType && (
            <Image
              src={alertIconUrl(alertType)}
              alt="alert 메시지 타입 아이콘"
              width={20}
              height={20}
            />
          )}
          <p className={style.alertMsg()}>{alertMsg}</p>
        </div>
      )}
    </label>
  );
};

export default ControlledInput;
