import {create} from "zustand";

const initialState = {
  store: undefined,
  menus: []
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  setStore: (store) => {
    set((state) => ({...state, store: store}));
    // set((state) => ({...state, store})); // 생략가능
  },
  addMenu: (menu) => {
    set((state) => ({...state, menus: [...state.menus, menu]}));
  },
  reset: () => {
    set(() => ({ ...initialState }));
  }
}));
export default useCartStore;