import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';

//TODO: 서버 개발 완료되면 연결
const exitAccount = async () => {
  await http.delete('members/me');
};

const useExitAccount = () => {
  return useMutation({ mutationFn: exitAccount });
};

export default useExitAccount;
