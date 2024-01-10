import type { NextPage } from 'next';

import WriteInput from '@/src/components/Input/WriteInput';
import { useInput } from '@/src/hooks/useInput';

const HomePage: NextPage = () => {
  const testInputProps = useInput({
    id: 'test',
    defaultValue: '',
  });

  return (
    <WriteInput inputProps={testInputProps} placeholder="메모를 끄적여보세요" />
  );
};

export default HomePage;
