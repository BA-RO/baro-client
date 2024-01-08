import type { PropsWithChildren } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useTooltipContext } from '@/src/hooks/useTooltipContext';

import * as styles from './style.css';
import TooltipPortal from './TooltipPortal';

const TooltipContent = ({ children }: PropsWithChildren) => {
  const { isVisible, hasArrow, position } = useTooltipContext();

  return (
    <>
      {isVisible && (
        <TooltipPortal>
          <div
            className={styles.content({ hasArrow })}
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
