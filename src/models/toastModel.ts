export const TOAST_DURATION_TIME = {
  SHOW: 3500,
  ACTION: 5000,
} as const;

export type ToastDurationTime =
  (typeof TOAST_DURATION_TIME)[keyof typeof TOAST_DURATION_TIME];
