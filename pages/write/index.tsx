import WriteInput from '@components/Input/WriteInput';
import WriteGuide from '@domain/Write/components/Guide';
import WriteHistory from '@domain/Write/History';
import { useInput } from '@hooks/useInput';

const WritePage = () => {
  const writeInput = useInput({ id: 'write-input' });

  return (
    <>
      <WriteGuide />
      <WriteHistory data={[]} />
      <WriteInput inputProps={writeInput} />
    </>
  );
};

export default WritePage;
