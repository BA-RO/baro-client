import Icon from '@components/Icon';
import { EXIT_CAUSES } from '@domain/계정설정/constants';

import ExitModalListItem from './components/ListItem';
import * as styles from './style.css';

interface ExitModalProps {
  selectCause: string | null;
  onContentClick: (cause: string) => void;
}

const ExitModal = ({ selectCause, onContentClick }: ExitModalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <strong className={styles.modalTitle}>{"'바로'를 떠나시나요?"}</strong>
        <p>탈퇴하시려는 이유를 알려주세요.</p>

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

        <div className={styles.closeBtn}>
          <Icon icon={'close'} width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
