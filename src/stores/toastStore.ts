import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

import {
  TOAST_DURATION_TIME,
  type ToastDurationTime,
} from '../models/toastModel';

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

const useToastStore = <T>(
  selector: (state: State & Action) => T,
  equals?: (a: T, b: T) => boolean,
) => useStore(toastStore, selector, equals);

export const useToast = () =>
  useToastStore(
    (state) => ({
      toastData: state.toastData,
      showToast: state.showToast,
      hideToast: state.hideToast,
    }),
    shallow,
  );
