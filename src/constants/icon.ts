import Close from '@assets/icons/close.svg';
import Profle from '@assets/icons/profile.svg';
import Submit from '@assets/icons/submit.svg';

export const iconFactory = {
  profile: Profle,
  submit: Submit,
  close: Close,
};

export type Icons = keyof typeof iconFactory;
