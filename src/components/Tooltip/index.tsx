import type { PropsWithChildren, RefObject } from 'react';
import { createContext, useContext } from 'react';

import useDisclosure from '@hooks/useDisclosure';
import usePosition from '@hooks/usePosition';

import TooltipContent from './components/TooltipContent';
import TooltipTrigger from './components/TooltipTrigger';

const INIT_POSITION = { top: 0, left: 0 };

export interface TooltipShape {
  hasArrow?: boolean;
  placement?: 'top-center' | 'bottom-center';
}

interface TooltipContextProps extends TooltipShape {
  triggerRef: RefObject<HTMLDivElement>;
  targetRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  position: typeof INIT_POSITION;
  onOpen: () => void;
  onClose: () => void;
}

interface TooltipProps extends TooltipShape {}

export const TooltipContext = createContext<TooltipContextProps | null>(null);

const TooltipRoot = ({
  children,
  hasArrow = false,
  placement = 'bottom-center',
}: PropsWithChildren<TooltipProps>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { triggerRef, targetRef, position } = usePosition({
    isOpen,
    placement,
  });

  return (
    <TooltipContext.Provider
      value={{
        triggerRef,
        targetRef,
        isOpen,
        position,
        hasArrow,
        placement,
        onOpen,
        onClose,
      }}
    >
      <div ref={triggerRef}>{children}</div>
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const ctx = useContext(TooltipContext);

  if (!ctx) {
    throw new Error(
      'useTooltipContext hook must be used within a Tooltip component',
    );
  }

  return ctx;
};

const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export default Tooltip;
