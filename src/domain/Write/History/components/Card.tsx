import { type Write } from '@domain/Write/types';

const WriteHistoryCard = ({ createAt, value }: Omit<Write, 'id'>) => {
  return (
    <li>
      <p>{createAt}</p>
      <p>{value}</p>
    </li>
  );
};

export default WriteHistoryCard;
