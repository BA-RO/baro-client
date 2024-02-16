import { http } from '@api/http';

import { type ArchiveCard, type Folder } from '../types';

const API_URL = '/archives';

interface ArchiveParams {
  get: {
    folderId: Folder['id'];
  };
  patch: {
    archiveId: ArchiveCard['archiveId'];
    content: ArchiveCard['content'];
  };
}

const archiveApi = {
  get: async ({ folderId }: ArchiveParams['get']) =>
    await http.get<ArchiveCard[]>(`${API_URL}/folder/${folderId}?tabName=all`),
  patch: async ({ archiveId, content }: ArchiveParams['patch']) =>
    await http.patch(`${API_URL}/${archiveId}`, { content }),
};

export default archiveApi;
