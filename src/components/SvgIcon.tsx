import { iconFactory, type Icons } from '../constants/icon';

interface IconProps {
  icon: Icons;
  color?: string;
  width?: number;
  height?: number;
}

const Icon = ({ icon, color, width = 24, height = 24 }: IconProps) => {
  const SvgIcon = iconFactory[icon];

  return <SvgIcon color={color} width={width} height={height} />;
};

export default Icon;
