import Add from '@assets/icons/add.svg';
import Archive from '@assets/icons/archive.svg';
import ArrowDown from '@assets/icons/arrowDown.svg';
import ArrowUp from '@assets/icons/arrowUp.svg';
import Ask from '@assets/icons/ask.svg';
import Bookmark from '@assets/icons/bookmark.svg';
import BookmarkHeader from '@assets/icons/bookmarkHeader.svg';
import BookmarkRefer from '@assets/icons/bookmarkRefer.svg';
import Celebrate from '@assets/icons/celebrate.svg';
import CheckBox from '@assets/icons/check-box.svg';
import CheckBoxActive from '@assets/icons/check-box-active.svg';
import Clock from '@assets/icons/clock.svg';
import ClockActive from '@assets/icons/clock-active.svg';
import Close from '@assets/icons/close.svg';
import CloseActive from '@assets/icons/close-active.svg';
import Comfort from '@assets/icons/comfort.svg';
import Complete from '@assets/icons/complete.svg';
import Copy from '@assets/icons/copy.svg';
import Error from '@assets/icons/error.svg';
import Google from '@assets/icons/google.svg';
import Google2 from '@assets/icons/Google2.svg';
import Instagram from '@assets/icons/instagram.svg';
import Kakao from '@assets/icons/kakao.svg';
import Kakao2 from '@assets/icons/Kakao2.svg';
import Logo32 from '@assets/icons/logo32.svg';
import Logout from '@assets/icons/logout.svg';
import Menu from '@assets/icons/menu.svg';
import Naver from '@assets/icons/naver.svg';
import Naver2 from '@assets/icons/Naver2.svg';
import PencilActive from '@assets/icons/pencil-active.svg';
import PencilDefault from '@assets/icons/pencil-default.svg';
import Picture from '@assets/icons/picture.svg';
import Profle from '@assets/icons/profile.svg';
import ProfileDialog from '@assets/icons/profileDialog.svg';
import ProfileHeader from '@assets/icons/profileHeader.svg';
import Regard from '@assets/icons/regard.svg';
import Report from '@assets/icons/report.svg';
import Setting from '@assets/icons/setting.svg';
import Spelling from '@assets/icons/spelling.svg';
import Submit from '@assets/icons/submit.svg';
import TemplateActive from '@assets/icons/template-active.svg';
import TemplateDefault from '@assets/icons/template-default.svg';
import Thank from '@assets/icons/thank.svg';

export const iconFactory = {
  add: Add,
  archive: Archive,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  ask: Ask,
  bookmark: Bookmark,
  bookmarkHeader: BookmarkHeader,
  bookmarkRefer: BookmarkRefer,
  celebrate: Celebrate,
  clock: Clock,
  clockActive: ClockActive,
  close: Close,
  closeActive: CloseActive,
  comfort: Comfort,
  complete: Complete,
  copy: Copy,
  checkBox: CheckBox,
  checkBoxActive: CheckBoxActive,
  error: Error,
  google: Google,
  google2: Google2,
  instagram: Instagram,
  kakao: Kakao,
  kakao2: Kakao2,
  logo32: Logo32,
  logout: Logout,
  menu: Menu,
  naver: Naver,
  naver2: Naver2,
  pencilActive: PencilActive,
  pencilDefault: PencilDefault,
  profile: Profle,
  profileDialog: ProfileDialog,
  profileHeader: ProfileHeader,
  regard: Regard,
  report: Report,
  setting: Setting,
  spelling: Spelling,
  submit: Submit,
  templateActive: TemplateActive,
  templateDefault: TemplateDefault,
  picture: Picture,
  thank: Thank,
};

export type Icons = keyof typeof iconFactory;
