import type { NextPage } from 'next';

import TextArea from '@/src/components/Input/TextArea/TextArea';
import { useInput } from '@/src/hooks/useInput';

const HomePage: NextPage = () => {
  const testInputProps = useInput({
    id: 'test',
    defaultValue: '',
  });

  return (
    <TextArea
      inputProps={testInputProps}
      placeholder="메모를 끄적여보세요"
      alertType={'error'}
      alertMsg="에러 메시지"
      showPostFix
    />
  );
};

export default HomePage;
