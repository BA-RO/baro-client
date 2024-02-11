import { type RefObject, useLayoutEffect, useRef, useState } from 'react';

const POSITION = { top: 0, left: 0 };

type YPlacement = 'top' | 'bottom';
type XPlacement = 'left' | 'center' | 'right';
type Placement = `${YPlacement}-${XPlacement}`;

interface UsePositionProps {
  defaultTriggerRef?: RefObject<HTMLDivElement>;
  isOpen: boolean;
  placement: Placement;
}

const usePosition = <
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement = HTMLDivElement,
>({
  defaultTriggerRef,
  isOpen,
  placement,
}: UsePositionProps) => {
  const ref = useRef<T>(null);
  const triggerRef = defaultTriggerRef || ref;
  const targetRef = useRef<U>(null);
  const [position, setPosition] = useState(POSITION);

  useLayoutEffect(() => {
    if (!triggerRef.current || !targetRef.current || !isOpen) {
      return;
    }

    const {
      x,
      y,
      width: triggerWidth,
      height: triggerHeight,
    } = triggerRef.current.getBoundingClientRect();
    const { width: targetWidth } = targetRef.current.getBoundingClientRect();

    const { scrollX, scrollY } = window;

    const top = y + scrollY - triggerHeight;
    const bottom = y + scrollY + triggerHeight;

    const left = x + scrollX;
    const center = left + triggerWidth / 2 - targetWidth / 2;
    const right = left + triggerWidth - targetWidth;

    const CALCULATED_POSITION: Record<Placement, typeof POSITION> = {
      'top-left': { top, left },
      'top-center': { top, left: center },
      'top-right': { top, left: right },
      'bottom-left': { top: bottom, left },
      'bottom-center': { top: bottom, left: center },
      'bottom-right': { top: bottom, left: right },
    };

    setPosition(CALCULATED_POSITION[placement]);
  }, [triggerRef, placement, isOpen]);

  return { triggerRef, targetRef, position };
};

export default usePosition;
