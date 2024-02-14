import { type PropsWithChildren } from 'react';

import Button from '@components/Button';

interface HoverButtonProps {
  className: string;
  onClick: () => void;
  setHoveredFilterButton: () => void;
  resetFilterButtonType: () => void;
}

const HoverButton = ({
  children,
  className,
  onClick,
  setHoveredFilterButton,
  resetFilterButtonType,
}: PropsWithChildren<HoverButtonProps>) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      onMouseOver={setHoveredFilterButton}
      onMouseOut={resetFilterButtonType}
    >
      {children}
    </Button>
  );
};

export default HoverButton;
