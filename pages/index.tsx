import ControlledInput from '@components/Input/ControlledInput';
import { useInput } from '@hooks/useInput';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const testInputProps = useInput('test');

  return (
    <ControlledInput
      inputProps={testInputProps}
      postfix={
        <>
          <p>0/1000자</p>
        </>
      }
    />
  );
};

export default HomePage;
