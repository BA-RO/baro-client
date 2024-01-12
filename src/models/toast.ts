import type { TOAST_DURATION_TIME } from '@constants/toast';

export type ToastDurationTime =
  (typeof TOAST_DURATION_TIME)[keyof typeof TOAST_DURATION_TIME];
