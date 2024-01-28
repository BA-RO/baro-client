import { createStore } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useStoreWithEqualityFn as useStore } from 'zustand/traditional';

interface State {
  accessToken: string;
}

interface Action {
  setAccessToken: (accessToken: string) => void;
}

export const tokenStore = createStore<State & Action>((set) => ({
  accessToken: '',
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export const useTokenStore = () =>
  useStore(tokenStore, (state) => state, shallow);
