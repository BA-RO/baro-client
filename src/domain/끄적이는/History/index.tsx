import { type FC } from 'react';

import { type WriteHisotry } from '../types';
import TemporalMemoHistoryTable from './components/Table';

interface TemporalMemoHistoryProps {
  data: WriteHisotry[];
}

const TemporalMemoHistory: FC<TemporalMemoHistoryProps> = ({ data }) => {
  // TODO: 날짜 분기 확인
  return <TemporalMemoHistoryTable data={data} />;
};

export default TemporalMemoHistory;
