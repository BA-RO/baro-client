import type { PropsWithChildren, Ref } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';

import TooltipContent from './TooltipContent';
import TooltipTrigger from './TooltipTrigger';

const INIT_POSITION = { top: 0, left: 0 };
const TOOLTIP_MARGIN = 4;
const TOOLTIP_PADDING = 16;

interface TooltipContextProps {
  tooltipRef: Ref<HTMLDivElement>;
  isVisible: boolean;
  hasArrow?: boolean;
  position: typeof INIT_POSITION;
  onOpenTooltip: () => void;
  onCloseTooltip: () => void;
}

interface TooltipProps {
  hasArrow?: boolean;
}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

const TooltipRoot = ({
  children,
  hasArrow = false,
}: PropsWithChildren<TooltipProps>) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState(INIT_POSITION);

  useEffect(() => {
    if (tooltipRef.current && isVisible) {
      const { x, y, width, height } =
        tooltipRef.current.getBoundingClientRect();
      const { scrollY } = window;

      let positionTop: number;
      const positionLeft = x + width / 2;

      if (hasArrow) {
        positionTop = scrollY + y + height + TOOLTIP_MARGIN;
      } else {
        positionTop = scrollY + y - height - TOOLTIP_MARGIN - TOOLTIP_PADDING;
      }

      setPosition({
        top: positionTop,
        left: positionLeft,
      });
    }
  }, [isVisible, hasArrow]);

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
