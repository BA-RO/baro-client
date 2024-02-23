export const TOAST_DURATION_TIME = {
  SHOW: 3500,
  ACTION: 5000,
} as const;

export const TOAST_TRANSITION_DURATION = 400;

export const TOAST_MESSAGE = {
  CARD: {
    COPY: '글이 복사되었어요. 원하는 곳에 붙여넣기(Ctrl+V)를 해주세요!',
    SAVE: '글이 저장되었어요.',
    EDIT: '글이 수정됐어요.',
    DELETE: '글이 삭제됐어요.',
  },
  SPELLCHECK: {
    SUCCESS: '맞춤법 검사가 완료되었어요. 올바른 문장을 확인해보세요!',
    ERROR: '지금은 맞춤법 검사가 힘들어요. 잠시 후에 다시 시도해주세요.',
  },
  MEMOFOLDER: {
    EDIT: '폴더 이름이 수정됐어요.',
    DELETE: '폴더와 글이 모두 삭제됐어요.',
    MOVE_TO_DEFAULT_FOLDER: '글이 모두 기본 폴더로 이동됐어요.',
  },
};
