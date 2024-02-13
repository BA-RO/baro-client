import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';

const updateProfile = async ({
  name,
  nickname,
}: {
  name: string;
  nickname: string;
}) => {
  await http.patch('members/profile/me', { name, nickname });
};

const useUpdateProfile = () => {
  return useMutation({ mutationFn: updateProfile });
};

export default useUpdateProfile;
