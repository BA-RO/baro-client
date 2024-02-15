import { http } from '@api/http';

import { type ArchiveCard } from '../types';

const API_URL = '/archives';

const archiveApi = {
  get: async (folderId: number) =>
    await http.get<ArchiveCard[]>(`${API_URL}/folder/${folderId}?tabName=all`),
};

export default archiveApi;
