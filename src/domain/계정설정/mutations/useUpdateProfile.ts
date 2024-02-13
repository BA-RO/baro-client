import { useMutation, useQueryClient } from '@tanstack/react-query';

import { http } from '@api/http';
import { useToastStore } from '@stores/toast';

import { ProfileQueryKeys } from '../constants/queryKeys';

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
  const { showToast } = useToastStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      showToast({ message: '모든 변경사항이 저장됐어요.' });
      queryClient.invalidateQueries({ queryKey: ProfileQueryKeys.all });
    },
  });
};

export default useUpdateProfile;
