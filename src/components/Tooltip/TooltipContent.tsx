import type { PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { useTooltipContext } from '@/src/hooks/useTooltipContext';

import * as styles from './style.css';
import TooltipPortal from './TooltipPortal';

const ARROW_STYLE = {
  top: styles.bottomArrow,
  bottom: styles.topArrow,
};

const TooltipContent = ({ children }: PropsWithChildren) => {
  const { isVisible, hasArrow, placement, position } = useTooltipContext();

  return (
    <>
      {isVisible && (
        <TooltipPortal>
          <div
            className={clsx(
              styles.content({ hasArrow }),
              hasArrow && ARROW_STYLE[placement],
            )}
            style={assignInlineVars({
              [styles.top]: `${position.top}px`,
              [styles.left]: `${position.left}px`,
            })}
          >
            {children}
          </div>
        </TooltipPortal>
      )}
    </>
  );
};

export default TooltipContent;
