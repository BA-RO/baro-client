import WriteInput from '@components/Input/WriteInput';
import WriteGuide from '@domain/Write/components/Guide';
import WriteHistory from '@domain/Write/History';
import { type WriteHisotry } from '@domain/Write/types';
import { useInput } from '@hooks/useInput';

const MOCK: WriteHisotry[] = [
  {
    date: '2024-01-03',
    histroy: [
      { createAt: '2024-01-03T01:01:01', id: '1', value: 'test 1' },
      { createAt: '2024-01-03T01:01:02', id: '2', value: 'test 2' },
    ],
  },
  {
    date: '2024-01-04',
    histroy: [
      { createAt: '2024-01-04T01:01:01', id: '3', value: 'test 3' },
      { createAt: '2024-01-04T01:01:02', id: '4', value: 'test 4' },
    ],
  },
];

const WritePage = () => {
  const writeInput = useInput({ id: 'write-input' });

  return (
    <>
      <WriteGuide />
      <WriteHistory data={MOCK} />
      <WriteInput inputProps={writeInput} />
    </>
  );
};

export default WritePage;
