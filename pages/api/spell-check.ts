import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_TIMEOUT } from '@constants/http';

import { type SpellCheckResponse } from '../../src/types/spellCheck';

const hanspell = require('hanspell');

interface SpellCheckResult {
  /* 맞춤법 오류 종류 */
  type: 'space' | 'spell' | 'space_spell' | 'doubt';
  /* 맞춤법 검사한 문장 */
  context: string;
  /* 맞춤법 오류 어절 */
  token: string;
  /* 맞춤법 정정 어절 */
  suggestions: string;
}

/**
 * 주어진 문장에 대해 맞춤법 검사를 진행합니다.
 * @param sentence(req.body) 맞춤법 검사를 진행할 글
 * @returns 글에서의 맞춤법 오류 종류, 맞춤법 검사한 문장, 맞춤법 오류 어절, 맞춤법 정정 어절을 배열로 반환합니다.
 */

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpellCheckResponse>,
) {
  const { sentence } = req.body;

  const error = (error: Error) => {
    console.error(error);

    res.status(500).json({ status: 'error' });
  };

  const spellCheckByDAUM = (results: SpellCheckResult[]) => {
    const spellCheckResult = results.map((result, index) => ({
      id: `[${index}] ${result.token}`,
      type: result.type !== 'space_spell' ? result.type : 'spell',
      errorContext: result.context,
      errorToken: result.token,
      correct: result.suggestions[0],
    }));

    res.status(200).json({ status: 'success', result: spellCheckResult });
  };

  hanspell.spellCheckByDAUM(
    sentence,
    HTTP_TIMEOUT,
    spellCheckByDAUM,
    () => {},
    error,
  );
}
