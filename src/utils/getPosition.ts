import type { TooltipShape } from '../components/Tooltip';

const TOOLTIP_MARGIN = {
  MINIMAL: 8,
  HIGHLIGHT: 32,
};

export const getPosition = (
  triggerElement: HTMLDivElement,
  hasArrow: TooltipShape['hasArrow'],
  placement: TooltipShape['placement'],
) => {
  const { x, y, width, height } = triggerElement.getBoundingClientRect();
  const { scrollX, scrollY } = window;

  const margin = hasArrow ? TOOLTIP_MARGIN.HIGHLIGHT : TOOLTIP_MARGIN.MINIMAL;
  const left = x + scrollX + width / 2;

  switch (placement) {
    case 'top':
      return { top: y + scrollY - height - margin, left };
    case 'bottom':
      return { top: y + scrollY + height, left };
    default:
      throw new Error(`The placement value must be either 'top' or 'bottom'.`);
  }
};
