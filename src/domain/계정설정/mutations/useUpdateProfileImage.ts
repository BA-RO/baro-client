import { useMutation } from '@tanstack/react-query';

import { http } from '@api/http';
import { useToastStore } from '@stores/toast';

const updateProfileImage = async (file: string | undefined) => {
  if (!file) throw Error('파일이 없어요.');

  const base64Data = file.split(';base64,')[1];
  const contentType = file.split(';base64,')[0].split(':')[1];
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: contentType });

  const formData = new FormData();
  formData.append('profileImage', blob);

  await http.patch(
    'members/image',
    { profileImage: formData },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

const deleteProfileImage = async () => {
  await http.delete('members/image');
};

const useUpdateProfileImage = () => {
  const { showToast } = useToastStore();

  const updateImage = useMutation({
    mutationFn: updateProfileImage,
    onSuccess: () => showToast({ message: '프로필 이미지가 변경됐어요.' }),
    onError: () => {
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
