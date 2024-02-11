import dayjs from 'dayjs';

import * as styles from './today.css';

interface TodayTemporalMemoCardProps {
  createAt: string;
  content: string;
}

const TodayTemporalMemoCard = ({
  createAt,
  content,
}: TodayTemporalMemoCardProps) => {
  return (
    <li className={styles.container}>
      <p className={styles.date}>
        {dayjs(createAt).locale('ko').format('a h:mm')}
      </p>
      <>{content}</>
    </li>
  );
};

export default TodayTemporalMemoCard;
