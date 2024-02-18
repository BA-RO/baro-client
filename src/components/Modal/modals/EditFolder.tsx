import { type ChangeEvent, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { AxiosError } from 'axios';
import clsx from 'clsx';

import useUpdateMemoFolder from '@api/memoFolder/mutations/useUpdateMemoFolder';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { useModalStore } from '@stores/modal';
import { COLORS } from '@styles/tokens';

import ModalContainer from '../components/ModalContainer';
import * as styles from '../style.css';

const EditFolder = () => {
  const queryClient = useQueryClient();

  const { closeModal, memoFolderId, folderName } = useModalStore();
  const [value, setValue] = useState(folderName);
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = useUpdateMemoFolder();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setValue(e.target.value);
  };

  const handleFolderNameEdit = async () => {
    if (value.length > 10) return setErrorMessage('10자 내로 입력해주세요!');

    mutate(
      { memoFolderId, folderName: value },
      {
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
      },
    );
  };

  return (
    <ModalContainer>
      <strong className={styles.makeFolderTitle}>폴더 수정하기</strong>
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
          value={value}
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
          onClick={handleFolderNameEdit}
        >
          저장하기
        </Button>
      </div>
    </ModalContainer>
  );
};

export default EditFolder;
