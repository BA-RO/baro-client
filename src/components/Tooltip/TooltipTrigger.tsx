import { type PropsWithChildren } from 'react';

import { useTooltipContext } from '@/src/hooks/useTooltipContext';

import * as styles from './style.css';

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const { tooltipRef, onOpenTooltip, onCloseTooltip } = useTooltipContext();

  return (
    <div
      ref={tooltipRef}
      className={styles.trigger}
      onMouseEnter={onOpenTooltip}
      onMouseLeave={onCloseTooltip}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;
