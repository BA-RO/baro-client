import type { PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { PORTAL_ID } from '@constants/portal';
import { useTooltipContext } from '@hooks/useTooltipContext';

import Portal from '../../Portal';
import * as styles from '../style.css';

const ARROW_STYLE = {
  'top-center': styles.bottomArrow,
  'bottom-center': styles.topArrow,
};

const MARGIN_STYLE = {
  MINIMAL: styles.minimalTooltipMargin,
  HIGHLIGHT: styles.highlightTooltipMargin,
};

const TooltipContent = ({ children }: PropsWithChildren) => {
  const { targetRef, isOpen, hasArrow, placement, position } =
    useTooltipContext();

  const isTopHighlightTooltip = hasArrow && placement === 'top-center';
  const isTopMinimalTooltip = !hasArrow && placement === 'top-center';

  return (
    <>
      {isOpen && (
        <Portal id={PORTAL_ID['TOOLTIP']}>
          <div
            ref={targetRef}
            className={clsx(
              styles.content({ hasArrow }),
              hasArrow && placement && ARROW_STYLE[placement],
              isTopMinimalTooltip && MARGIN_STYLE.MINIMAL,
              isTopHighlightTooltip && MARGIN_STYLE.HIGHLIGHT,
            )}
            style={assignInlineVars({
              [styles.top]: `${position.top}px`,
              [styles.left]: `${position.left}px`,
            })}
          >
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default TooltipContent;
