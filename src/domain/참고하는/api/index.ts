import { http } from '@api/http';

import { type Category, type FilterButton, type Templates } from '../types';

export const getTemplates = (category: Category, sort: FilterButton) =>
  http.get<Templates>(`/templates/${category}?sort=${sort}`);
