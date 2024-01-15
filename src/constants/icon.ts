import Clock from '@assets/icons/clock.svg';
import Close from '@assets/icons/close.svg';
import Profle from '@assets/icons/profile.svg';
import Submit from '@assets/icons/submit.svg';

export const iconFactory = {
  clock: Clock,
  close: Close,
  profile: Profle,
  submit: Submit,
};

export type Icons = keyof typeof iconFactory;
