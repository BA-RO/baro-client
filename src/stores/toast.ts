import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

import { TOAST_DURATION_TIME } from '@constants/toast';

import { type ToastDurationTime } from '../models/toast';

interface ToastData {
  message: string;
  type: ToastDurationTime;
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
  showToast: (data) => set({ toastData: { ...data, isToastVisible: true } }),
  hideToast: () => {
    set({ toastData: { ...get().toastData, isToastVisible: false } });
  },
}));

export const useToastStore = () =>
  useStore(toastStore, (state) => state, shallow);
