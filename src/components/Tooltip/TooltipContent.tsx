import type { PropsWithChildren } from 'react';

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
            style={{ top: position.top, left: position.left }}
          >
            {children}
          </div>
        </TooltipPortal>
      )}
    </>
  );
};

export default TooltipContent;
