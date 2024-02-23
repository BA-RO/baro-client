import { type PropsWithChildren } from 'react';

import { type SpellCheckResult } from '@api/spell/types';
import TooltipButton from '@components/Button/components/TooltipButton';
import FolderDropdown, {
  type FolderDropdownType,
} from '@components/Dropdown/FolderDropdown';
import { type SPELLCHECK_TYPE } from '@constants/spellCheck';
import { TOAST_MESSAGE } from '@constants/toast';
import { useToastStore } from '@stores/toast';

import SpellCheckNotice from '../SpellCheckNotice';
import SpellTypeBox from '../SpellTypeBox';
import * as styles from './style.css';

const getStyledSuggestion = (result: SpellCheckResult) => {
  const { suggestions, correction } = result;

  const init: (string | React.JSX.Element)[] = [];
  const pattern = suggestions.map(({ correct }) => correct).join('|');
  const regex = new RegExp(`${pattern}`, 'g');

  const splitedCorrection = correction.split(regex);
  const matches = correction.match(regex)!;

  const styledSuggestionTag = suggestions.map(({ type, correct }) => (
    <StyledSuggestion key={correct} type={type}>
      {correct}
    </StyledSuggestion>
  ));

  const styledSuggestion = splitedCorrection.reduce(
    (arr, element, index) =>
      matches[index]
        ? [...arr, element, styledSuggestionTag[index]]
        : [...arr, element],
    init,
  );

  return styledSuggestion;
};

interface StyledSuggestionProps {
  type: keyof typeof SPELLCHECK_TYPE;
}

interface SpellCheckCardProps extends FolderDropdownType {
  spellCheckResult: SpellCheckResult;
}

const StyledSuggestion = ({
  children,
  type,
}: PropsWithChildren<StyledSuggestionProps>) => {
  return <span className={styles[type]}>{children}</span>;
};

const SpellCheckCard = ({
  spellCheckResult,
  isArchived,
  memoFolders,
  onClickFolder,
}: SpellCheckCardProps) => {
  const { showToast } = useToastStore();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(spellCheckResult.correction);

    showToast({ message: TOAST_MESSAGE.CARD.COPY });
  };

  return (
    <>
      {spellCheckResult.suggestions.length > 0 ? (
        <div className={styles.card}>
          <SpellCheckNotice>
            {spellCheckResult.suggestions.length}가지 수정이 필요해요!
          </SpellCheckNotice>
          <div className={styles.suggestion}>
            <div className={styles.spellCheckBox}>
              <div>{getStyledSuggestion(spellCheckResult)}</div>
              <SpellTypeBox />
            </div>
            <div className={styles.buttonGroup}>
              <TooltipButton
                icon="copy"
                content="복사"
                onClick={handleCopyClick}
              />
              <FolderDropdown
                isArchived={isArchived}
                memoFolders={memoFolders}
                onClickFolder={onClickFolder}
              />
            </div>
          </div>
        </div>
      ) : (
        <SpellCheckNotice>수정할 부분이 없어요!</SpellCheckNotice>
      )}
    </>
  );
};

export default SpellCheckCard;
