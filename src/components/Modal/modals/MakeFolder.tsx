import { type ChangeEvent, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { AxiosError } from 'axios';
import clsx from 'clsx';

import Button from '@components/Button';
import Icon from '@components/Icon';
import ModalContainer from '@components/Modal/components/ModalContainer';
import * as styles from '@components/Modal/style.css';
import usePostMemoFolders from '@queries/usePostMemoFolders';
import { useModalStore } from '@stores/modal';
import { COLORS } from '@styles/tokens';

const MakeFolder = () => {
  const queryClient = useQueryClient();

  const { closeModal } = useModalStore();
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = usePostMemoFolders();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setValue(e.target.value);
  };

  const handleMakeFolderButtonClick = async () => {
    if (value.length > 10) return setErrorMessage('10자 내로 입력해주세요!');

    mutate(value, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['memo-folders'],
        });
        closeModal();
      },
      onError: (e) => {
        if (!(e instanceof AxiosError) || !e.response) throw e;
        if (
          (e.response.data as { errorCode: string; message: string })
            .errorCode === 'MF01'
        )
          return setErrorMessage('이미 사용 중인 폴더 이름이에요!');
        throw e;
      },
    });
  };

  return (
    <ModalContainer>
      <strong className={styles.makeFolderTitle}>새 폴더 만들기</strong>
      <label htmlFor="makeFolder" className={styles.makeFolderDescription}>
        폴더 이름
      </label>
      <div className={styles.makeFolderInputWrapper}>
        <input
          id="makeFolder"
          className={clsx(
            styles.makeFolderInput,
            errorMessage && styles.errorInput,
          )}
          placeholder="새 폴더 이름을 입력해주세요 (ex. 축하)"
          onChange={handleInputChange}
        />
      </div>
      {errorMessage && (
        <span className={styles.errorMessage}>
          <div className={styles.errorIcon}>
            <Icon width={20} height={20} icon="error" />
          </div>
          {errorMessage}
        </span>
      )}
      <div className={styles.makeFolderButtonWrapper}>
        <Button
          className={styles.button}
          style={assignInlineVars({
            [styles.buttonColor]: COLORS['Grey/600'],
            [styles.buttonBackgroundColor]: COLORS['Grey/150'],
          })}
          onClick={closeModal}
        >
          취소
        </Button>
        <Button
          className={clsx(styles.button, !value && styles.buttonDisabled)}
          disabled={!value}
          style={assignInlineVars({
            [styles.buttonColor]: COLORS['Grey/White'],
            [styles.buttonBackgroundColor]: COLORS['Blue/Default'],
          })}
          onClick={handleMakeFolderButtonClick}
        >
          만들기
        </Button>
      </div>
    </ModalContainer>
  );
};

export default MakeFolder;
