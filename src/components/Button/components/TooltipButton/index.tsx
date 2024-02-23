import { type HTMLAttributes, type PropsWithChildren } from 'react';

import Button from '@components/Button';
import Icon from '@components/Icon';
import Tooltip from '@components/Tooltip';
import { type Icons } from '@constants/icon';
import { COLORS } from '@styles/tokens';

import * as styles from './style.css';

interface TooltipButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isDropdown?: boolean;
  icon?: Icons;
  content: string;
}

const TooltipButton = ({
  children,
  isActive = false,
  isDropdown = false,
  icon,
  content,
  ...props
}: PropsWithChildren<TooltipButtonProps>) => {
  const iconComponent = icon ? (
    <Icon
      className={styles.hover}
      icon={icon}
      color={isActive ? COLORS['Blue/Default'] : COLORS['Grey/300']}
    />
  ) : (
    <>{children}</>
  );

  const buttonComponent = isDropdown ? (
    iconComponent
  ) : (
    <Button {...props}>{iconComponent}</Button>
  );

  return (
    <Tooltip placement="top-center">
      <Tooltip.Trigger>{buttonComponent}</Tooltip.Trigger>
      <Tooltip.Content>{content}</Tooltip.Content>
    </Tooltip>
  );
};

export default TooltipButton;
