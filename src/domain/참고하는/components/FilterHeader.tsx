import Button from '@components/Button';

import * as styles from './FilterHeader.css';

const FilterHeader = () => {
  return (
    <div className={styles.filterHeaderWrapper}>
      <div>
        <Button className={styles.filterButton}>부탁하기</Button>
        <Button className={styles.filterButton}>보고하기</Button>
        <Button className={styles.filterButton}>축하하기</Button>
        <Button className={styles.filterButton}>감사 전하기</Button>
      </div>
      <div>
        <Button className={styles.filterButton}>위로하기</Button>
        <Button className={styles.filterButton}>안부 전하기</Button>
        <Button className={styles.filterButton}>기타</Button>
      </div>
    </div>
  );
};

export default FilterHeader;
