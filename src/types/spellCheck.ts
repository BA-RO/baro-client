import { type SPELLCHECK_TYPE } from '@constants/spellCheck';

export interface SpellCheckResult {
  /* 고유 아이디 */
  id: string;
  /* 맞춤법 오류 종류 */
  type: keyof typeof SPELLCHECK_TYPE;
  /* 맞춤법 검사한 문장 */
  errorContext: string;
  /* 맞춤법 오류 어절 */
  errorToken: string;
  /* 맞춤법 정정 어절 */
  correct: string;
}

export interface SpellCheckParams {
  sentence: string;
}

interface SpellCheckSuccessResponse {
  status: 'success';
  result: SpellCheckResult[];
}

interface SpellCheckErrorResponse {
  status: 'error';
}

export interface SpellCheckResponse {
  data: SpellCheckSuccessResponse | SpellCheckErrorResponse;
}
