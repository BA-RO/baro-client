import { useMutation } from '@tanstack/react-query';

import { patchTemplateCopyCount } from '../api';

const useCopyTemplate = () =>
  useMutation({
    mutationFn: patchTemplateCopyCount,
  });

export default useCopyTemplate;
