import type { Icons } from '../constants/icon';
import { iconFactory } from '../constants/icon';

interface IconProps {
  icon: Icons;
  fill?: string;
  width?: number;
  height?: number;
}

const Icon = ({ icon, fill, width = 24, height = 24 }: IconProps) => {
  const SvgIcon = iconFactory[icon];

  return <SvgIcon fill={fill} width={width} height={height} />;
};

export default Icon;
