import { useQuery } from '@tanstack/react-query';

import { getTemplates } from '../api';
import { type Category, type FilterButton } from '../types';

interface UseTemplateParams {
  category: Category;
  sort: FilterButton;
}

const useTemplate = ({ category, sort }: UseTemplateParams) =>
  useQuery({
    queryKey: ['templates', category, sort],
    queryFn: () => getTemplates(category, sort),
  });

export default useTemplate;
