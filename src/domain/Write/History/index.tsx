import { type WriteHisotry } from '../types';
import WriteHistoryCard from './components/Card';
import * as style from './index.css';

interface WriteHistoryProps {
  data: WriteHisotry[];
}

const WriteHistory = ({ data }: WriteHistoryProps) => {
  return (
    <section className={style.container}>
      {data.map((history) => (
        <ol key={history.date}>
          <p>{history.date}</p>

          {history.histroy.map((history) => (
            <WriteHistoryCard
              key={history.id}
              createAt={history.createAt}
              value={history.value}
            />
          ))}
        </ol>
      ))}
    </section>
  );
};

export default WriteHistory;
