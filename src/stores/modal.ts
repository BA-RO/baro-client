import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

type ModalType =
  | 'deleteArticle'
  | 'login'
  | 'makeFolder'
  | 'editFolder'
  | 'deleteFolder';

interface State {
  type: ModalType | null;
  folderName: string;
  memoFolderId: number;
}

interface Action {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  setFolderName: (folderName: State['folderName']) => void;
  setMemoFolderId: (memoFolderId: State['memoFolderId']) => void;
}

export const modalStore = createStore<State & Action>((set) => ({
  type: null,
  folderName: '',
  memoFolderId: 0,
  openModal: (type) => set({ type }),
  closeModal: () => set({ type: null }),
  setFolderName: (folderName: State['folderName']) => set({ folderName }),
  setMemoFolderId: (memoFolderId: State['memoFolderId']) =>
    set({ memoFolderId }),
}));

export const useModalStore = () =>
  useStore(modalStore, (state) => state, shallow);
