import type { FC, SVGProps } from 'react';

import { Icon as icon } from '../constants/icon';

interface IconProps {
  icon: keyof typeof icon;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

const Icon = ({
  icon: iconKey,
  fill,
  stroke,
  width = 24,
  height = 24,
}: IconProps) => {
  const SvgIcon = icon[iconKey] as FC<SVGProps<SVGSVGElement>>;

  return <SvgIcon fill={fill} stroke={stroke} width={width} height={height} />;
};

export default Icon;
