import { useEffect, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import Button from '@components/Button';
import Icon from '@components/Icon';
import * as styles from '@domain/참고하는/components/FilterHeader.css';
import HoverButton from '@domain/참고하는/components/HoverButton';
import { type Category } from '@domain/참고하는/types';

type FilterButtonType = Exclude<Category, 'etc'>;

interface FilterHeaderProps {
  selectedFilterHeader: Category;
  handleFilterHeaderSelect: (type: Category) => () => void;
}

const FilterHeader = ({
  selectedFilterHeader,
  handleFilterHeaderSelect,
}: FilterHeaderProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredFilterButton, setHoveredFilterButton] =
    useState<FilterButtonType | null>(null);

  const resetFilterButtonType = () => setHoveredFilterButton(null);

  const getHoverButtonProps = (type: FilterButtonType) => ({
    className: clsx(
      styles.filterButton,
      selectedFilterHeader === type && styles.active,
    ),
    onClick: handleFilterHeaderSelect(type),
    setHoveredFilterButton: () => setHoveredFilterButton(type),
    resetFilterButtonType,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <div className={styles.filterHeaderWrapper}>
      <div>
        <HoverButton {...getHoverButtonProps('ask')}>부탁하기</HoverButton>
        <HoverButton {...getHoverButtonProps('report')}>보고하기</HoverButton>
        <HoverButton {...getHoverButtonProps('celebrate')}>
          축하하기
        </HoverButton>
        <HoverButton {...getHoverButtonProps('thank')}>감사 전하기</HoverButton>
      </div>
      <div>
        <HoverButton {...getHoverButtonProps('comfort')}>위로하기</HoverButton>
        <HoverButton {...getHoverButtonProps('regard')}>
          안부 전하기
        </HoverButton>
        <Button
          className={clsx(
            styles.filterButton,
            selectedFilterHeader === 'etc' && styles.active,
          )}
          onClick={handleFilterHeaderSelect('etc')}
        >
          기타
        </Button>
      </div>
      {hoveredFilterButton && (
        <Icon
          icon={hoveredFilterButton}
          className={styles.filterButtonIcon}
          width={56}
          height={56}
          style={assignInlineVars({
            [styles.positionX]: `${mousePos.x + 5}px`,
            [styles.positionY]: `${mousePos.y + 5}px`,
          })}
        />
      )}
    </div>
  );
};

export default FilterHeader;
