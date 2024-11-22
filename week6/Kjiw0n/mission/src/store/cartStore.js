import { create } from "zustand";
import { updateCart } from "../api/cart";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu] }));
    updateCart(store, get().menus);
  },

  getTotalPrice: () => get().menus.reduce((acc, cur) => acc + cur.price, 0),
  getMinDeliveryPrice: () => get().store?.minDeliveryPrice,
}));

export default useCartStore;
