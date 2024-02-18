import { http } from '@api/http';

import { type Folder } from './types';

const API_URL = '/memo-folders';

export const getMemoFolders = () => http.get<Folder[]>(API_URL);

export const postMemoFolders = (folderName: string) =>
  http.post(API_URL, { folderName });

export const patchMemoFolders = ({
  memoFolderId,
  folderName,
}: {
  memoFolderId: number;
  folderName: string;
}) =>
  http.patch(API_URL, {
    memoFolderId,
    folderName,
  });

export const deleteMemoFolders = ({
  memoFolderId,
  deleteAllMemo,
}: {
  memoFolderId: number;
  deleteAllMemo: boolean;
}) =>
  http.delete(API_URL, {
    memoFolderId,
    deleteAllMemo,
  });
