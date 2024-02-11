import dayjs from 'dayjs';

import Icon from '@components/Icon';
import { type Write } from '@domain/끄적이는/types';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

const WriteHistoryCard = ({ createAt, value }: Omit<Write, 'id'>) => {
  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <p className={styles.date}>
          {dayjs(createAt).locale('ko').format('a h:mm')}
        </p>
        <div className={styles.ctaWrapper}>
          <button>
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
