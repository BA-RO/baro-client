import { type PropsWithChildren } from 'react';

import { useTooltipContext } from '@hooks/useTooltipContext';

import * as styles from '../style.css';

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const { onOpen, onClose } = useTooltipContext();

  return (
    <div
      className={styles.trigger}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;
