import { MAIN_INPUT_MAX_LENGTH } from '@constants/config';

interface DefaultPostfixProps {
  valueLength: number;
}

const DefaultPostfix = ({ valueLength }: DefaultPostfixProps) => {
  return (
    <div>
      {valueLength > 0 && (
        <span>{`${valueLength} / ${MAIN_INPUT_MAX_LENGTH}자`}</span>
      )}

      <button>
        <img src="" alt="" />
      </button>
    </div>
  );
};

export default DefaultPostfix;
