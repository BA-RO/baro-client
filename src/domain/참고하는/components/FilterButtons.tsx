import { useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import * as styles from '@domain/참고하는/components/FilterButtons.css';
import { FILTER_BUTTONS } from '@domain/참고하는/models';
import { type FilterButton } from '@domain/참고하는/types';
import { COLORS } from '@styles/tokens';

interface FilterButtonsProps {
  selectedFilterButton: FilterButton;
  handleFilterButtonSelect: (type: FilterButton) => () => void;
}

const FilterButtons = ({
  selectedFilterButton,
  handleFilterButtonSelect,
}: FilterButtonsProps) => {
  const [isActive, setIsActive] = useState(false);

  const filterButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isClickOutside =
        filterButtonsRef.current &&
        !filterButtonsRef.current?.contains(e.target as Node);
      isClickOutside && setIsActive(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const remainFilterButtons = (
    Object.keys(FILTER_BUTTONS) as (keyof typeof FILTER_BUTTONS)[]
  ).filter((filterButton) => filterButton !== selectedFilterButton);

  if (isActive)
    return (
      <div className={styles.activeFilterButtonsWrapper} ref={filterButtonsRef}>
        <Button
          className={styles.activeFilterButton}
          onClick={() => setIsActive(false)}
        >
          {FILTER_BUTTONS[selectedFilterButton]}
          <Icon
            icon="arrowUp"
            width={18}
            height={18}
            color={COLORS['Grey/300']}
            className={styles.filterButtonIcon}
          />
        </Button>
        {remainFilterButtons.map((remainFilterButton) => (
          <Button
            key={remainFilterButton}
            className={styles.remainFilterButton}
            onClick={handleFilterButtonSelect(remainFilterButton)}
          >
            {FILTER_BUTTONS[remainFilterButton]}
          </Button>
        ))}
      </div>
    );

  return (
    <div className={styles.filterButtonWrapper}>
      <Button
        className={styles.activeFilterButton}
        onClick={() => setIsActive(true)}
      >
        {FILTER_BUTTONS[selectedFilterButton]}
        <Icon
          icon="arrowDown"
          width={18}
          height={18}
          color={COLORS['Grey/300']}
          className={styles.filterButtonIcon}
        />
      </Button>
    </div>
  );
};

export default FilterButtons;
