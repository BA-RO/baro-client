import { type CATEGORY_COLOR } from '@constants/config';

export interface Folder {
  id: number;
  name: string;
}

export interface ArchiveCard {
  archiveId: number;
  categoryName: keyof typeof CATEGORY_COLOR;
  content: string;
  copiedCount: number;
  savedCount: number;
  tabName: string;
}
