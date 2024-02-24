import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';

//TODO: 서버 개발 완료되면 연결
const exitAccount = async ({ exitCause }: { exitCause: string }) => {
  await http.delete('/members', { data: { reason: exitCause } });
};

const useExitAccount = () => {
  return useMutation({ mutationFn: exitAccount });
};

export default useExitAccount;
