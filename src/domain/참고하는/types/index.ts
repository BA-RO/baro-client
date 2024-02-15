import { type CATEGORY, type FILTER_BUTTONS } from '@domain/참고하는/models';

export type Category = keyof typeof CATEGORY;

export interface ReferContent {
  templateId: number;
  category: Category;
  subCategory: string;
  content: string;
  savedCount: number;
  copiedCount: number;
  isArchived: boolean;
}

export type FilterButton = keyof typeof FILTER_BUTTONS;

export interface Templates {
  content: ReferContent[];
}
