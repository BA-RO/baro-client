import Button from '@components/Button';
import Icon from '@components/Icon';
import * as styles from '@domain/참고하는/components/FilterButtons.css';
import { FILTER_BUTTONS } from '@domain/참고하는/models';
import { type FilterButton } from '@domain/참고하는/types';
import useClickAway from '@hooks/useClickAway';
import useDisclosure from '@hooks/useDisclosure';
import { COLORS } from '@styles/tokens';

interface FilterButtonsProps {
  selectedFilterButton: FilterButton;
  handleFilterButtonSelect: (type: FilterButton) => () => void;
}

const FilterButtons = ({
  selectedFilterButton,
  handleFilterButtonSelect,
}: FilterButtonsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filterButtonsRef = useClickAway({
    onClickAway: onClose,
  });

  const remainFilterButtons = (
    Object.keys(FILTER_BUTTONS) as (keyof typeof FILTER_BUTTONS)[]
  ).filter((filterButton) => filterButton !== selectedFilterButton);

  if (isOpen)
    return (
      <div className={styles.activeFilterButtonsWrapper} ref={filterButtonsRef}>
        <Button className={styles.activeFilterButton} onClick={onClose}>
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
      <Button className={styles.activeFilterButton} onClick={onOpen}>
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
