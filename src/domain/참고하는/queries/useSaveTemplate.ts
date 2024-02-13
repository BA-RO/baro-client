import { useMutation } from '@tanstack/react-query';

import { postSaveTemplate } from '../api';

const useSaveTemplate = () =>
  useMutation({
    mutationFn: postSaveTemplate,
  });

export default useSaveTemplate;
