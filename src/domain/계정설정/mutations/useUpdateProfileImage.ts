import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';
import { useToastStore } from '@stores/toast';

const updateProfileImage = async (file: string | undefined) => {
  if (!file) throw Error('파일이 없어요.');

  const formData = new FormData();
  const profileImage = formData.append('profileImage', file);

  await http.patch('members/image', { profileImage });
};

const deleteProfileImage = async () => {
  await http.delete('members/image');
};

const useUpdateProfileImage = () => {
  const { showToast } = useToastStore();

  const updateImage = useMutation({
    mutationFn: updateProfileImage,
    onSuccess: () => showToast({ message: '프로필 이미지가 변경됐어요.' }),
    onError: (err) => {
      console.log(err);
      showToast({ message: '10MB 이하의 파일만 업로드 가능해요.' });
    },
  });

  const deleteImage = useMutation({
    mutationFn: deleteProfileImage,
    onSuccess: () => showToast({ message: '프로필 이미지가 삭제됐어요.' }),
  });

  return { updateImage, deleteImage };
};

export default useUpdateProfileImage;
