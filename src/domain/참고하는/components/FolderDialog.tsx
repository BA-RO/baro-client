import { forwardRef } from 'react';

import { type Folder } from '@api/memoFolder/types';
import Dialog from '@components/Dialog';
import Icon from '@components/Icon';
import * as styles from '@domain/참고하는/components/FolderDialog.css';
import { useModalStore } from '@stores/modal';

interface FolderDialogProps {
  memoFolders: Folder[];
  closeDialog: () => void;
}

const FolderDialog = forwardRef<HTMLButtonElement, FolderDialogProps>(
  ({ memoFolders, closeDialog }, ref) => {
    const { openModal } = useModalStore();

    return (
      <Dialog
        className={styles.wrapper}
        type="medium"
        closeDialog={closeDialog}
        ref={ref}
      >
        {memoFolders.map(({ id, name }) => {
          if (name === '기본')
            return (
              <Dialog.Button key={id} onClick={() => {}}>
                OOO님의 폴더<span className={styles.badge}>기본</span>
              </Dialog.Button>
            );
          return (
            <Dialog.Button key={id} onClick={() => {}}>
              {name}
            </Dialog.Button>
          );
        })}
        <Dialog.Button onClick={() => openModal('makeFolder')}>
          <div className={styles.icon}>
            <Icon icon="add" width={20} height={20} />
          </div>
          <span className={styles.iconMediumText}>새 폴더 만들기</span>
        </Dialog.Button>
      </Dialog>
    );
  },
);

FolderDialog.displayName = 'FolderDialog';

export default FolderDialog;
