import Add from '@assets/icons/add.svg';
import Archive from '@assets/icons/archive.svg';
import Clock from '@assets/icons/clock.svg';
import Close from '@assets/icons/close.svg';
import Copy from '@assets/icons/copy.svg';
import Logout from '@assets/icons/logout.svg';
import Menu from '@assets/icons/menu.svg';
import PencilActive from '@assets/icons/pencil-active.svg';
import PencilDefault from '@assets/icons/pencil-default.svg';
import Profle from '@assets/icons/profile.svg';
import ProfileDialog from '@assets/icons/profileDialog.svg';
import Setting from '@assets/icons/setting.svg';
import Submit from '@assets/icons/submit.svg';
import TemplateActive from '@assets/icons/template-active.svg';
import TemplateDefault from '@assets/icons/template-default.svg';

export const iconFactory = {
  add: Add,
  archive: Archive,
  clock: Clock,
  close: Close,
  copy: Copy,
  logout: Logout,
  menu: Menu,
  pencilActive: PencilActive,
  pencilDefault: PencilDefault,
  profile: Profle,
  profileDialog: ProfileDialog,
  setting: Setting,
  submit: Submit,
  templateActive: TemplateActive,
  templateDefault: TemplateDefault,
};

export type Icons = keyof typeof iconFactory;
