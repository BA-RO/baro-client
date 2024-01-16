import Close from '@assets/icons/close.svg';
import PencilActive from '@assets/icons/pencil-active.svg';
import PencilDefault from '@assets/icons/pencil-default.svg';
import Profle from '@assets/icons/profile.svg';
import Submit from '@assets/icons/submit.svg';
import TemplateActive from '@assets/icons/template-active.svg';
import TemplateDefault from '@assets/icons/template-default.svg';

export const iconFactory = {
  close: Close,
  pencilActive: PencilActive,
  pencilDefault: PencilDefault,
  profile: Profle,
  submit: Submit,
  templateActive: TemplateActive,
  templateDefault: TemplateDefault,
};

export type Icons = keyof typeof iconFactory;
