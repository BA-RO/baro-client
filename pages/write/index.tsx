import WriteInput from '@components/Input/WriteInput';
import WriteGuide from '@domain/Write/components/Guide';
import WriteHistory from '@domain/Write/History';
import { useInput } from '@hooks/useInput';

import * as style from './style.css';

const WritePage = () => {
  const writeInput = useInput({ id: 'write-input' });

  return (
    <div className={style.container}>
      <WriteGuide />
      <WriteHistory data={[]} />
      <WriteInput inputProps={writeInput} />
    </div>
  );
};

export default WritePage;
