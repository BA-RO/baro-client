import Dialog from '@components/Dialog';

import * as styles from './setting.css';

interface SettingDialogProps {
  onOutsideClick: VoidFunction;
  onEditClick: VoidFunction;
  onDeleteClick: VoidFunction;
}

const SettingDialog = ({
  onOutsideClick,
  onEditClick,
  onDeleteClick,
}: SettingDialogProps) => {
  return (
    <Dialog
      type="medium"
      className={styles.container}
      closeDialog={onOutsideClick}
    >
      <Dialog.Button onClick={onEditClick}>수정하기</Dialog.Button>
      <Dialog.Button onClick={onDeleteClick}>삭제하기</Dialog.Button>
    </Dialog>
    // <div className={styles.container}>
    //   <button className={styles.button} onClick={onEditClick}>
    //     수정하기
    //   </button>
    //   <button className={styles.button} onClick={onDeleteClick}>
    //     삭제하기
    //   </button>
    // </div>
  );
};

export default SettingDialog;
