import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

type ModalType = 'deleteArticle';

interface State {
  type: ModalType | null;
}

interface Action {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const modalStore = createStore<State & Action>((set) => ({
  type: null,
  openModal: (type) => set({ type }),
  closeModal: () => set({ type: null }),
}));

export const useModalStore = () =>
  useStore(modalStore, (state) => state, shallow);
