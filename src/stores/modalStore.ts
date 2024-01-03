import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

type ModalType = 'no' | 'deleteArticle';

interface State {
  type: ModalType;
}

interface Action {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

export const modalStore = createStore<State & Action>((set) => ({
  type: 'no',
  openModal: (type) => set({ type }),
  closeModal: () => set({ type: 'no' }),
}));

const useModalStore = <T>(
  selector: (state: State & Action) => T,
  equals?: (a: T, b: T) => boolean,
) => useStore(modalStore, selector, equals);

export const useModal = () =>
  useModalStore(
    (state) => ({
      type: state.type,
      openModal: state.openModal,
      closeModal: state.closeModal,
    }),
    shallow,
  );
