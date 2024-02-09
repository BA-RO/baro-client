import { type PropsWithChildren } from 'react';

import { type SpellCheckResult } from '@api/spell/types';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { type SPELLCHECK_TYPE } from '@constants/spellCheck';

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

interface SpellCheckCardProps {
  spellCheckResult: SpellCheckResult;
}

const StyledSuggestion = ({
  children,
  type,
}: PropsWithChildren<StyledSuggestionProps>) => {
  return <span className={styles[type]}>{children}</span>;
};

const SpellCheckCard = ({ spellCheckResult }: SpellCheckCardProps) => {
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
              <Button>
                <Icon icon="copy" className={styles.icon} />
              </Button>
              <Button>
                <Icon icon="bookmark" className={styles.icon} />
              </Button>
              <Button>
                <Icon icon="menu" className={styles.icon} />
              </Button>
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
