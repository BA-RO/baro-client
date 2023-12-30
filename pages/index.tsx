import ControlledInput from '@components/Input/ControlledInput';
import { useInput } from '@hooks/useInput';
import type { NextPage } from 'next';
import DefaultPostfix from '@components/Input/Postfix';

const HomePage: NextPage = () => {
  const testInputProps = useInput({ id: 'test', defaultValue: 'xxxx' });

  return (
    <ControlledInput
      type={'2'}
      inputProps={testInputProps}
      placeholder="메모를 끄적여보세요"
      postfix={<DefaultPostfix valueLength={testInputProps.value.length} />}
    />
  );
};

export default HomePage;
