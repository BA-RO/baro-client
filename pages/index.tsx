import BaseInput from '@components/Input/BaseInput';
import { useInput } from '@hooks/useInput';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const testInputProps = useInput('test');

  return <BaseInput inputProps={testInputProps} />;
};

export default HomePage;
