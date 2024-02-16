import { type RefObject, useEffect, useRef, useState } from 'react';

const POSITION = { top: 0, left: 0 };

type YPlacement = 'top' | 'bottom';
type XPlacement = 'left' | 'center' | 'right';
type Placement = `${YPlacement}-${XPlacement}`;

interface UsePositionProps {
  defaultTriggerRef?: RefObject<HTMLDivElement>;
  isOpen: boolean;
  placement: Placement;
  fixed?: boolean;
}

const usePosition = <
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement = HTMLDivElement,
>({
  defaultTriggerRef,
  isOpen,
  placement,
  fixed = false,
}: UsePositionProps) => {
  const ref = useRef<T>(null);
  const triggerRef = defaultTriggerRef || ref;
  const targetRef = useRef<U>(null);

  const [position, setPosition] = useState(POSITION);

  useEffect(() => {
    if (!triggerRef.current || !targetRef.current || !isOpen) {
      return;
    }

    const { width: triggerWidth, height: triggerHeight } =
      triggerRef.current.getBoundingClientRect();
    const { width: targetWidth } = targetRef.current.getBoundingClientRect();

    const top = -triggerHeight;
    const bottom = triggerHeight;

    const left = 0;
    const center = triggerWidth / 2 - targetWidth / 2;
    const right = triggerWidth - targetWidth;

    const CALCULATED_POSITION: Record<Placement, typeof POSITION> = {
      'top-left': { top, left },
      'top-center': { top, left: center },
      'top-right': { top, left: right },
      'bottom-left': { top: bottom, left },
      'bottom-center': { top: bottom, left: center },
      'bottom-right': { top: bottom, left: right },
    };

    setPosition(CALCULATED_POSITION[placement]);
  }, [triggerRef, placement, isOpen, fixed]);

  return { triggerRef, targetRef, position };
};

export default usePosition;
