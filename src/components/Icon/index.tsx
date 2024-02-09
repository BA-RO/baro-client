import { iconFactory, type Icons } from '../../constants/icon';

interface IconProps {
  icon: Icons;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Icon = ({
  icon,
  className,
  color,
  width = 24,
  height = 24,
}: IconProps) => {
  const SvgIcon = iconFactory[icon];

  return (
    <SvgIcon
      className={className}
      color={color}
      width={width}
      height={height}
    />
  );
};

export default Icon;
