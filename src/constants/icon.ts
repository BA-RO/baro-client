import Add from '@assets/icons/add.svg';
import Archive from '@assets/icons/archive.svg';
import Close from '@assets/icons/close.svg';
import Copy from '@assets/icons/copy.svg';
import Google from '@assets/icons/google.svg';
import Kakao from '@assets/icons/kakao.svg';
import Logout from '@assets/icons/logout.svg';
import Menu from '@assets/icons/menu.svg';
import Naver from '@assets/icons/naver.svg';
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
  close: Close,
  copy: Copy,
  google: Google,
  kakao: Kakao,
  logout: Logout,
  menu: Menu,
  naver: Naver,
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
