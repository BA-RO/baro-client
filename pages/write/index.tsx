import WriteInput from '@components/Input/WriteInput';
import WriteGuide from '@domain/Write/components/Guide';
import WriteHistory from '@domain/Write/History';
import { type WriteHisotry } from '@domain/Write/types';
import { useInput } from '@hooks/useInput';

const MOCK: WriteHisotry[] = [
  {
    date: '2024-01-03',
    histroy: [
      { createAt: '2024-01-03T01:01', id: '1', value: 'test 1' },
      { createAt: '2024-01-03T11:01', id: '2', value: 'test 2' },
      {
        createAt: '2024-01-03T21:01',
        id: '11',
        value:
          'test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11test 11',
      },
      { createAt: '2024-01-03T11:01', id: '21', value: 'test 21' },
      { createAt: '2024-01-03T21:01', id: '12', value: 'test 12' },
      { createAt: '2024-01-03T19:01', id: '22', value: 'test 22' },
      { createAt: '2024-01-03T23:01', id: '23', value: 'test 23' },
    ],
  },
  {
    date: '2024-01-04',
    histroy: [
      { createAt: '2024-01-04T01:01', id: '3', value: 'test 3' },
      { createAt: '2024-01-04T01:01', id: '4', value: 'test 4' },
      { createAt: '2024-01-04T11:01', id: '7', value: 'test 7' },
    ],
  },
  {
    date: '2024-01-05',
    histroy: [
      { createAt: '2024-01-05T11:01', id: '5', value: 'test 5' },
      { createAt: '2024-01-05T19:01', id: '6', value: 'test 6' },
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
