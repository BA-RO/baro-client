import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

import {
  TOAST_DURATION_TIME,
  TOAST_TRANSITION_DURATION,
} from '@constants/toast';

import { type ToastDurationTime } from '../models/toast';

interface ToastData {
  message: string;
  type?: ToastDurationTime;
}

interface ToastState {
  isToastVisible: boolean;
}

interface State {
  toastData: ToastData & ToastState;
}

interface Action {
  showToast: (data: ToastData) => void;
  hideToast: () => void;
}

const INITIAL_TOAST_DATA = {
  message: '',
  type: TOAST_DURATION_TIME.SHOW,
  isToastVisible: false,
};

export const toastStore = createStore<State & Action>((set, get) => ({
  toastData: INITIAL_TOAST_DATA,
  showToast: ({ message, type = TOAST_DURATION_TIME.SHOW }) =>
    set({ toastData: { message, type, isToastVisible: true } }),
  hideToast: () => {
    set({ toastData: { ...get().toastData, isToastVisible: false } });
    setTimeout(
      () => set({ toastData: { ...get().toastData, message: '' } }),
      TOAST_TRANSITION_DURATION,
    );
  },
}));

export const useToastStore = () =>
  useStore(toastStore, (state) => state, shallow);
