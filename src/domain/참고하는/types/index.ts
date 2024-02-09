import { type CATEGORY } from '@domain/참고하는/models';

export interface Refer {
  templateId: number;
  category: keyof typeof CATEGORY;
  subCategory: string;
  content: string;
  savedCount: number;
  copiedCount: number;
}
