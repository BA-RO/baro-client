import Profle from '@/src/assets/icons/profile.svg';
import Submit from '@/src/assets/icons/submit.svg';

export const iconFactory = {
  profile: Profle,
  submit: Submit,
};

export type Icons = keyof typeof iconFactory;
