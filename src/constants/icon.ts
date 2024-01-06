import type { FC, SVGProps } from 'react';

import Profle from '@/src/assets/icons/profile.svg';
import Submit from '@/src/assets/icons/submit.svg';

export const iconFactory: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  submit: Submit,
  profile: Profle,
};

export type Icons = keyof typeof iconFactory;
