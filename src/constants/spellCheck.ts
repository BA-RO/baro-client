export const SPELLCHECK_TYPE = {
  spell: '맞춤법',
  space: '띄어쓰기',
  doubt: '표준어의심',
} as const;

export const SPELLCHECK_STATE_MESSAGE = {
  SUCCESS: '맞춤법 검사가 완료되었어요. 올바른 문장을 확인해보세요!',
  ERROR: '지금은 맞춤법 검사가 힘들어요. 잠시 후에 다시 시도해주세요.',
} as const;
