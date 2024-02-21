import { type HTMLAttributes, type PropsWithChildren } from 'react';

import Icon from '@components/Icon';
import Tooltip from '@components/Tooltip';
import { type Icons } from '@constants/icon';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

interface TooltipButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  icon?: Icons;
  content: string;
}

const TooltipButton = ({
  children,
  isActive = false,
  icon,
  content,
  ...props
}: PropsWithChildren<TooltipButtonProps>) => {
  return (
    <Tooltip placement="top-center">
      <Tooltip.Trigger {...props}>
        {icon ? (
          <Icon
            icon={icon}
            className={styles.hover}
            color={isActive ? COLORS['Blue/Default'] : COLORS['Grey/300']}
          />
        ) : (
          <>{children}</>
        )}
      </Tooltip.Trigger>
      <Tooltip.Content>{content}</Tooltip.Content>
    </Tooltip>
  );
};

export default TooltipButton;
