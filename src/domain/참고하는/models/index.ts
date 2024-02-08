export interface Refer {
  templateId: number;
  category:
    | 'ask'
    | 'report'
    | 'celebrate'
    | 'thank'
    | 'comfort'
    | 'regard'
    | 'etc';
  subCategory: string;
  content: string;
  savedCount: number;
  copiedCount: number;
}

export enum Category {
  ask = '부탁하기',
  report = '보고하기',
  celebrate = '축하하기',
  thank = '감사 전하기',
  comfort = '위로하기',
  regard = '안부 전하기',
  etc = '기타',
}
