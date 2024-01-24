import {
  type SpellCheckParams,
  type SpellCheckResponse,
} from '../types/spellCheck';
import { http } from './http';

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
