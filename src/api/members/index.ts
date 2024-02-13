import { http } from '@api/http';

import { type MyProfile } from './types';

export const getMyProfile = () => http.get<MyProfile>(`/members/profile/me`);
