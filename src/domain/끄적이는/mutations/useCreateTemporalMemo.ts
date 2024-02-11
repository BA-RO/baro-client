import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';

const createTemporalMemo = async (content: string) => {
  await http.post('/temporal-memos', { content });
};

const useCreateTemporalMemo = () => {
  return useMutation({
    mutationFn: createTemporalMemo,
  });
};

export default useCreateTemporalMemo;
