import { http } from '@api/http';

import { type Category, type FilterButton, type Templates } from '../types';

export const getTemplates = (category: Category, sort: FilterButton) =>
  http.get<Templates>(`/templates/${category}?sort=${sort}`);

interface PostSaveTemplateParams {
  templateId: number;
  memoFolderId: number;
}

export const postSaveTemplate = ({
  templateId,
  memoFolderId,
}: PostSaveTemplateParams) =>
  http.post(`/templates/${templateId}/archive`, { memoFolderId });

export const deleteTemplate = (templateId: number) =>
  http.delete(`/templates/${templateId}/archive`);

export const patchTemplateCopyCount = (templateId: number) =>
  http.patch(`/templates/${templateId}/copy`);
