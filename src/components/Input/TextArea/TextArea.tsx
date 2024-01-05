import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MAIN_INPUT_MAX_LENGTH } from '@/src/constants/config';
import type { UseInputReturn } from '@/src/hooks/useInput';

import * as style from './style.css';
import { inputHeight } from './style.css';

type AlertType = 'error' | 'warn';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  inputProps: UseInputReturn;
  placeholder?: string;
  maxLength?: number;
  alertType?: AlertType;
  alertMsg?: string;
  showPostFix?: boolean;
}

const TextArea = ({
  inputProps,
  placeholder,
  maxLength = MAIN_INPUT_MAX_LENGTH,
  alertType,
  alertMsg,
  showPostFix = false,
}: TextAreaProps) => {
  const { id, value } = inputProps;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [height, setHeight] = useState(27);

  const alertIconUrl = useMemo(
    () => (type: AlertType) => {
      if (type === 'error') {
        return '/icons/error.svg';
      }

      return '/icons/warn.svg';
    },
    [],
  );

  const submitButton = useMemo(() => {
    if (value.length > 0) {
      return '/icons/submit-active.svg';
    }
    return '/icons/submit.svg';
  }, [value.length]);

  useEffect(() => {
    if (inputRef.current) {
      setHeight(inputRef.current.scrollHeight);
    }

    // TODO: scroll height로 높이를 줄이기 때문에 이미 스크롤된 값에 대해 인지하는 방법을 확인해야 함. @원진
    if (value.length === 0) {
      setHeight(27);
    }
  }, [height, value]);

  return (
    <Fragment>
      <div className={style.conatiner({ error: alertType === 'error' })}>
        <div
          className={style.contentWrapper}
          style={assignInlineVars({ [inputHeight]: `${height}px` })}
        >
          <label htmlFor={id} className={style.label}>
            <textarea
              {...inputProps}
              ref={inputRef}
              style={assignInlineVars({ [inputHeight]: `${height}px` })}
              className={style.input}
              placeholder={placeholder}
              maxLength={maxLength}
            />
          </label>

          {showPostFix && (
            <div className={style.submitWrapper({ hasValue: height > 27 })}>
              <div className={style.submit}>
                <span className={style.textCount}>
                  <span className={style.currentTextCount}>{value.length}</span>
                  &nbsp;/&nbsp;500자
                </span>
                <button disabled={value.length < 1}>
                  {/* TODO: Svg 공용 아이콘 제작 후 변경 @원진 */}
                  <Image
                    src={submitButton}
                    alt={'제출 버튼'}
                    width={48}
                    height={48}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {alertMsg && (
        <div className={style.alert}>
          {/* TODO: Svg 공용 아이콘 제작 후 변경 @원진 */}
          {alertType && (
            <Image
              src={alertIconUrl(alertType)}
              alt="alert 메시지 타입 아이콘"
              width={20}
              height={20}
            />
          )}
          <p className={style.alertMsg}>{alertMsg}</p>
        </div>
      )}
    </Fragment>
  );
};

export default TextArea;
