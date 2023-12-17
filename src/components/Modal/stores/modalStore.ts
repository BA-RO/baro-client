import { createStore } from 'zustand';
import { useStore } from 'zustand';

const initialModalData = {
  title: '',
  firstButtonText: '',
};

interface ModalData {
  title: string;
  description?: string;
  firstButtonText: string;
  secondButtonText?: string;
}

interface State {
  modalData: ModalData;
}

interface Action {
  openModal: (modalData: ModalData) => void;
}

export const modalStore = createStore<State & Action>((set) => ({
  modalData: initialModalData,
  openModal: (modalData) => set({ modalData }),
}));

export const useModalStore = <T>(
  selector: (state: State & Action) => T,
  equals?: (a: T, b: T) => boolean,
) => useStore(modalStore, selector, equals);
