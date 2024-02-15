import { useMutation } from '@tanstack/react-query';

import { deleteTemplate } from '../api';

const useDeleteTemplate = () =>
  useMutation({
    mutationFn: deleteTemplate,
  });

export default useDeleteTemplate;
