import { http } from '../http';
import { type SpellCheckParams, type SpellCheckResponse } from './types';

const API_URL = '/api/spell-check';

const OPTIONS = { baseURL: '' };

const spellCheckApi = {
  post: async ({ sentence }: SpellCheckParams) =>
    await http.post<SpellCheckParams, SpellCheckResponse>(
      API_URL,
      { sentence },
      OPTIONS,
    ),
};

export default spellCheckApi;
