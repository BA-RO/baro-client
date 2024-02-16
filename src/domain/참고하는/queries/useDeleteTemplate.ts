import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteTemplate } from '../api';

const useDeleteTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTemplate,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['templates'],
      }),
  });
};

export default useDeleteTemplate;
