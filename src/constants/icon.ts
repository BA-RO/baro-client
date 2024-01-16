import Add from '@assets/icons/add.svg';
import Archive from '@assets/icons/archive.svg';
import Close from '@assets/icons/close.svg';
import Copy from '@assets/icons/copy.svg';
import Logout from '@assets/icons/logout.svg';
import Menu from '@assets/icons/menu.svg';
import Profle from '@assets/icons/profile.svg';
import ProfileDialog from '@assets/icons/profileDialog.svg';
import Setting from '@assets/icons/setting.svg';
import Submit from '@assets/icons/submit.svg';

export const iconFactory = {
  add: Add,
  archive: Archive,
  close: Close,
  copy: Copy,
  logout: Logout,
  menu: Menu,
  profile: Profle,
  profileDialog: ProfileDialog,
  setting: Setting,
  submit: Submit,
};

export type Icons = keyof typeof iconFactory;
