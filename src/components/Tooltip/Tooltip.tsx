import type { PropsWithChildren, Ref } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';

import { getPosition } from '@/src/utils/getPosition';

import TooltipContent from './TooltipContent';
import TooltipTrigger from './TooltipTrigger';

const INIT_POSITION = { top: 0, left: 0 };

export interface TooltipShape {
  hasArrow?: boolean;
  placement?: 'top' | 'bottom';
}

interface TooltipContextProps extends TooltipShape {
  tooltipRef: Ref<HTMLDivElement>;
  isVisible: boolean;
  position: typeof INIT_POSITION;
  onOpenTooltip: () => void;
  onCloseTooltip: () => void;
}

interface TooltipProps extends TooltipShape {}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

const TooltipRoot = ({
  children,
  hasArrow = false,
  placement = 'bottom',
}: PropsWithChildren<TooltipProps>) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(INIT_POSITION);

  useEffect(() => {
    if (!tooltipRef.current || !isVisible) {
      return;
    }

    const { top, left } = getPosition(tooltipRef.current, hasArrow, placement);

    setPosition({ top, left });
  }, [isVisible, hasArrow, placement]);

  const handleTooltipOpen = () => {
    setIsVisible(true);
  };

  const handleTooltipClose = () => {
    setIsVisible(false);
  };

  return (
    <TooltipContext.Provider
      value={{
        tooltipRef,
        isVisible,
        hasArrow,
        placement,
        position,
        onOpenTooltip: handleTooltipOpen,
        onCloseTooltip: handleTooltipClose,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export default Tooltip;
