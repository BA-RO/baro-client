import { SPELLCHECK_TYPE } from '@constants/spellCheck';

import * as styles from './style.css';

const SPELLCHECK_TYPES = Object.entries(SPELLCHECK_TYPE) as Entries<
  typeof SPELLCHECK_TYPE
>;

const SpellTypeBox = () => {
  return (
    <ul className={styles.spellTypeBox}>
      {SPELLCHECK_TYPES.map(([spellTypeKey, spellTypeValue]) => (
        <li
          key={spellTypeValue}
          className={styles.indication({ type: spellTypeKey })}
        >
          {spellTypeValue}
        </li>
      ))}
    </ul>
  );
};

export default SpellTypeBox;
