import Profle from '@assets/icons/profile.svg';
import Submit from '@assets/icons/submit.svg';

export const iconFactory = {
  profile: Profle,
  submit: Submit,
};

export type Icons = keyof typeof iconFactory;
