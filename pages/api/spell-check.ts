import type { NextApiRequest, NextApiResponse } from 'next';
import hanspell from 'hanspell';

import { type SpellCheckResponse, type Suggestion } from '@api/spell/types';

// eslint-disable-next-line no-useless-escape
const REGEX = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
const HTTP_TIMEOUT = 6000;

/**
 * 주어진 문장에 대해 맞춤법 검사 내용을 적용합니다.
 * @param sentence 맞춤법 검사를 진행한 글
 * @param suggestions 맞춤법 수정 사항
 * @returns correction 맞춤법 검사 내용을 적용한 글
 */

const getCorrection = (sentence: string, suggestions: Suggestion[]) => {
  return suggestions.reduce((correction, suggestion) => {
    const regex = new RegExp(`${suggestion.errorToken}`, 'g');
    return correction.replace(regex, suggestion.correct);
  }, sentence);
};
``;

interface SpellCheckResult {
  /* 맞춤법 오류 종류 */
  type: 'space' | 'spell' | 'space_spell' | 'doubt';
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

  const sentenceWithoutSymbol = sentence.replace(REGEX, '');

  const error = (error: Error) => {
    console.error(error);

    res
      .status(500)
      .json({ status: 'error', result: { suggestions: [], correction: '' } });
  };

  const spellCheckByDAUM = (results: SpellCheckResult[]) => {
    const suggestions = results.map((result) => ({
      type: result.type !== 'space_spell' ? result.type : 'spell',
      errorToken: result.token,
      correct: result.suggestions[0],
    }));

    const correction = getCorrection(sentence, suggestions);

    res.status(200).json({
      status: 'success',
      result: { suggestions, correction },
    });
  };

  hanspell.spellCheckByDAUM(
    sentenceWithoutSymbol,
    HTTP_TIMEOUT,
    spellCheckByDAUM,
    () => {},
    error,
  );
}
