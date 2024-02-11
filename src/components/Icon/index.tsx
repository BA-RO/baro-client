import { type CSSProperties } from '@vanilla-extract/css';

import { iconFactory, type Icons } from '../../constants/icon';

interface IconProps {
  icon: Icons;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const Icon = ({
  icon,
  className,
  color,
  width = 24,
  height = 24,
  style,
}: IconProps) => {
  const SvgIcon = iconFactory[icon];

  return (
    <SvgIcon
      className={className}
      color={color}
      width={width}
      height={height}
      style={style}
    />
  );
};

export default Icon;
