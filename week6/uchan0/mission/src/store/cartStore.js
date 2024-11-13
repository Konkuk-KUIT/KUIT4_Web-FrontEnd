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
    set((state) => ({ ...state, store: store }));
  },
  resetAll: () => {
    set((state) => ({
      menus: state.menus.map((menu) => ({ ...menu, cnt: 0 })),
    }));
    set(initialState);
  },
  updateMenuCount: (menuId) => {
    set((state) => ({
      menus: state.menus.map((menu) =>
        menu.id === menuId ? { ...menu, cnt: menu.cnt + 1 } : menu
      ),
    }));
  },
}));

export default useCartStore;
