import { useQuery } from '@tanstack/react-query';

import { getMyProfile } from '@api/members';

const useGetMyProfile = () =>
  useQuery({
    queryKey: ['my-profile'],
    queryFn: getMyProfile,
  });

export default useGetMyProfile;
