import { create } from "zustand";
const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  setStore: (store) => {
    console.log("set store");
    set((state) => ({ ...state, store: store }));
  },
  clearCart: () => {
    set(() => ({
      store: undefined,
      menus: [],
    }));
  },
}));
export default useCartStore;
