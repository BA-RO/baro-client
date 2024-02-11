import dayjs from 'dayjs';

import Icon from '@components/Icon';
import { type Write } from '@domain/끄적이는/types';
import { useToastStore } from '@stores/toast';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

const WriteHistoryCard = ({ createAt, value }: Omit<Write, 'id'>) => {
  const { showToast } = useToastStore();
  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    showToast({
      message: '문장이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    });
  };

  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <p className={styles.date}>
          {dayjs(createAt).locale('ko').format('a h:mm')}
        </p>
        <div className={styles.ctaWrapper}>
          <button onClick={handleCopyClick}>
            <Icon
              icon={'copy'}
              width={24}
              height={24}
              color={COLORS['Grey/300']}
            />
          </button>
          <button>
            <Icon icon="bookmark" color={COLORS['Grey/300']} />
          </button>
          <button>
            <Icon icon="menu" color={COLORS['Grey/300']} />
          </button>
        </div>
      </div>

      <p className={styles.value}>{value}</p>
    </li>
  );
};

export default WriteHistoryCard;
