import { type ReactNode } from 'react';

import { iconFactory, type Icons } from '../../constants/icon';

interface IconProps {
  icon: Icons;
  wrapperClassName?: string;
  className?: string;
  postfixClassName?: string;
  color?: string;
  width?: number;
  height?: number;
  postfix?: ReactNode;
  onHover?: VoidFunction;
}

const Icon = ({
  icon,
  wrapperClassName,
  className,
  postfixClassName,
  color,
  width = 24,
  height = 24,
  postfix,
  onHover,
}: IconProps) => {
  const SvgIcon = iconFactory[icon];

  return (
    <div className={wrapperClassName} onMouseEnter={onHover}>
      <SvgIcon
        className={className}
        color={color}
        width={width}
        height={height}
      />
      <div className={postfixClassName}>{postfix}</div>
    </div>
  );
};

export default Icon;
