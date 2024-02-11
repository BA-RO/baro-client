import { type ReactNode } from 'react';
import { type CSSProperties } from '@vanilla-extract/css';

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
  style?: CSSProperties;
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
  style,
}: IconProps) => {
  const SvgIcon = iconFactory[icon];
  if (!wrapperClassName && !postfix)
    return (
      <SvgIcon
        className={className}
        color={color}
        width={width}
        height={height}
      />
    );

  return (
    <div className={wrapperClassName} onMouseEnter={onHover}>
      <SvgIcon
        className={className}
        color={color}
        width={width}
        height={height}
        style={style}
      />
      {postfix && <div className={postfixClassName}>{postfix}</div>}
    </div>
  );
};

export default Icon;
