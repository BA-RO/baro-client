import * as styles from './setting.css';

interface SettingDialogProps {
  onEditClick: VoidFunction;
  onDeleteClick: VoidFunction;
}

const SettingDialog = ({ onEditClick, onDeleteClick }: SettingDialogProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onEditClick}>
        수정하기
      </button>
      <button className={styles.button} onClick={onDeleteClick}>
        삭제하기
      </button>
    </div>
  );
};

export default SettingDialog;
