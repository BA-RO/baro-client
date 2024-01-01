import ControlledInput from '@components/Input/ControlledInput';
import { useInput } from '@hooks/useInput';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const testInputProps = useInput({
    id: 'test',
    defaultValue: '',
  });

  return (
    <ControlledInput
      type={'primary'}
      inputProps={testInputProps}
      placeholder="메모를 끄적여보세요"
    />
  );
};

export default HomePage;
