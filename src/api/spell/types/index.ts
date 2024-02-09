import { type SPELLCHECK_TYPE } from '@constants/spellCheck';

export interface Suggestion {
  /* 맞춤법 오류 종류 */
  type: keyof typeof SPELLCHECK_TYPE;
  /* 맞춤법 오류 어절 */
  errorToken: string;
  /* 맞춤법 정정 어절 */
  correct: string;
}

export interface SpellCheckResult {
  suggestions: Suggestion[];
  correction: string;
}

export interface SpellCheckParams {
  sentence: string;
}

export interface SpellCheckSuccessResponse {
  status: 'success';
  result: SpellCheckResult;
}

export interface SpellCheckErrorResponse {
  status: 'error';
  result: SpellCheckResult;
}

export type SpellCheckResponse =
  | SpellCheckSuccessResponse
  | SpellCheckErrorResponse;
