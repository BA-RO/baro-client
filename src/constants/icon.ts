import type { FC, SVGProps } from 'react';

import Profle from '@/src/assets/icons/profile.svg';

export type IconFactory = {
  [key: string]: FC<SVGProps<SVGSVGElement>>;
};

export const Icon: IconFactory = {
  profile: Profle,
};
