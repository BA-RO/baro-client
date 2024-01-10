import type { PropsWithChildren } from 'react';
import { PORTAL_ID } from '@constants/portalId';
import { useTooltipContext } from '@hooks/useTooltipContext';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import Portal from '../Portal/Portal';
import * as styles from './style.css';

const ARROW_STYLE = {
  top: styles.bottomArrow,
  bottom: styles.topArrow,
};

const TooltipContent = ({ children }: PropsWithChildren) => {
  const { isVisible, hasArrow, placement, position } = useTooltipContext();

  return (
    <>
      {isVisible && (
        <Portal id={PORTAL_ID['TOOLTIP']}>
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
        </Portal>
      )}
    </>
  );
};

export default TooltipContent;
