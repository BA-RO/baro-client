import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';
import { postfixWrapper } from './style.css';

interface DefaultPostfixProps {
  valueLength: number;
}

const DefaultPostfix = ({ valueLength }: DefaultPostfixProps) => {
  return (
    <div className={postfixWrapper}>
      {valueLength > 0 && (
        <span>{`${valueLength} / ${MAIN_INPUT_MAX_LENGTH}자`}</span>
      )}
    </div>
  );
};

export default DefaultPostfix;
