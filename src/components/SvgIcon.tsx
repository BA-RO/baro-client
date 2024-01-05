import type { FC, SVGProps } from 'react';

import { Icon } from '../constants/icon';

interface SvgIconProps {
  icon: keyof typeof Icon;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

const SvgIcon = ({
  icon: iconKey,
  fill,
  stroke,
  width = 24,
  height = 24,
}: SvgIconProps) => {
  const SelectedIcon = Icon[iconKey] as FC<SVGProps<SVGSVGElement>>;

  return (
    <SelectedIcon fill={fill} stroke={stroke} width={width} height={height} />
  );
};

export default SvgIcon;
