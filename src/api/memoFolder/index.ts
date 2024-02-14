import { http } from '@api/http';

import { type Folder } from './types';

export const getMemoFolders = () => http.get<Folder[]>('/memo-folders');

export const postMemoFolders = (folderName: string) =>
  http.post('/memo-folders', { folderName });
