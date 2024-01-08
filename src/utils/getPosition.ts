import type { Placement } from '../components/Tooltip/Tooltip';

export const getPosition = (
  triggerElement: HTMLDivElement,
  placement: Placement,
) => {
  const { x, y, width, height } = triggerElement.getBoundingClientRect();
  const { scrollX, scrollY } = window;

  const left = x + scrollX + width / 2;

  switch (placement) {
    case 'top':
      return { top: y + scrollY - height, left };
    case 'bottom':
      return { top: y + scrollY + height, left };
    default:
      throw new Error(`The placement value must be either 'top' or 'bottom'.`);
  }
};
