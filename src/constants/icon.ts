import Archive from '@assets/icons/archive.svg';
import Close from '@assets/icons/close.svg';
import Copy from '@assets/icons/copy.svg';
import Menu from '@assets/icons/menu.svg';
import Profle from '@assets/icons/profile.svg';
import Submit from '@assets/icons/submit.svg';

export const iconFactory = {
  archive: Archive,
  close: Close,
  copy: Copy,
  menu: Menu,
  profile: Profle,
  submit: Submit,
};

export type Icons = keyof typeof iconFactory;
