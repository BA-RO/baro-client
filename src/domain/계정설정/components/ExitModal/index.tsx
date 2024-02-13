import { useState } from 'react';
import { type UseMutateFunction } from '@tanstack/react-query';

import Icon from '@components/Icon';
import { EXIT_CAUSES } from '@domain/계정설정/constants';

import ExitModalListItem from './components/ListItem';
import * as styles from './style.css';

interface ExitModalProps {
  selectCause: string | null;
  exitMutate: UseMutateFunction<void, Error, void, unknown>;
  onContentClick: (cause: string) => void;
  onModalCloseClick: VoidFunction;
}

const ExitModal = ({
  selectCause,
  exitMutate,
  onContentClick,
  onModalCloseClick,
}: ExitModalProps) => {
  const [step, setStep] = useState(0);

  const ctaBtnDisable = step === 0 && selectCause === null;

  const handleNextClick = () => {
    if (step === 0) {
      setStep((prev) => prev + 1);
    } else {
      exitMutate();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {step === 0 ? (
          <>
            <strong className={styles.modalTitle}>
              {"'바로'를 떠나시나요?"}
            </strong>
            <p className={styles.modalSubTitle}>
              탈퇴하시려는 이유를 알려주세요.
            </p>

            <ul className={styles.lists}>
              {EXIT_CAUSES.map((cause) => (
                <ExitModalListItem
                  key={cause}
                  isChecked={selectCause === cause}
                  content={cause}
                  onContentClick={onContentClick}
                />
              ))}
            </ul>
          </>
        ) : (
          <>
            <div>
              <strong className={styles.modalTitle}>정말 탈퇴할까요?</strong>
              <p className={styles.modalSubTitle2}>
                {
                  '탈퇴하시면 모든 사용자 정보와 활동 기록이 삭제돼요.\n그래도 탈퇴하시겠어요?'
                }
              </p>
            </div>
          </>
        )}

        <div className={styles.ctaWrapper}>
          <button
            className={styles.ctaBtn({ type: 'cancel' })}
            onClick={onModalCloseClick}
          >
            취소
          </button>
          <button
            className={styles.ctaBtn({
              type: ctaBtnDisable ? 'disable' : 'next',
            })}
            disabled={ctaBtnDisable}
            onClick={handleNextClick}
          >
            {step === 0 ? '다음' : '탈퇴하기'}
          </button>
        </div>

        <button className={styles.closeBtn} onClick={onModalCloseClick}>
          <Icon icon={'close'} width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default ExitModal;
