import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },

  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },

  getTotalPrice: () => get().menus.reduce((acc, cur) => acc + cur.price, 0),
  getMinDeliveryPrice: () => get().store?.minDeliveryPrice,
}));

export default useCartStore;
