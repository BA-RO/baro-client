import Dialog from '@components/Dialog';
import Icon from '@components/Icon';

import * as styles from '../style.css';

interface ProfileDialogProps {
  closeDialog: () => void;
}

const ProfileDialog = ({ closeDialog }: ProfileDialogProps) => {
  return (
    <Dialog
      type="medium"
      className={styles.dialogWrapper}
      closeDialog={closeDialog}
    >
      <Dialog.Title>
        <div className={styles.circle40}>
          <div className={styles.profileIcon}>
            <Icon icon="profileDialog" />
          </div>
        </div>
        <span className={styles.profileName}>바로가나다라마바님</span>
      </Dialog.Title>
      <Dialog.Button onClick={() => {}}>
        <div className={styles.buttonIcon}>
          <Icon icon="setting" width={20} height={20} />
        </div>
        <span className={styles.buttonText}>계정 설정</span>
      </Dialog.Button>
      <Dialog.Button onClick={() => {}}>
        <div className={styles.buttonIcon}>
          <Icon icon="logout" width={20} height={20} />
        </div>
        <span className={styles.buttonText}>로그아웃</span>
      </Dialog.Button>
    </Dialog>
  );
};

export default ProfileDialog;
