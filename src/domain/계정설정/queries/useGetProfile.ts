import { useQuery } from '@tanstack/react-query';

import { http } from '@api/http';

import { ProfileQueryKeys } from '../constants/queryKeys';
import { type Me } from '../types';

const getProfile = async () => {
  const res = await http.get<Me>('/members/my/profile');

  return res;
};

const useGetProfile = () => {
  const { data } = useQuery({
    queryKey: ProfileQueryKeys.getProfile,
    queryFn: getProfile,
  });

  if (!data)
    return {
      id: -1,
      name: '테스트',
      nickname: '테스트',
      profileImageUrl: null,
      email: 'fsdjin159@gmail.com',
      oAuthServiceType: 'naver',
    };

  return data;
};

export default useGetProfile;
