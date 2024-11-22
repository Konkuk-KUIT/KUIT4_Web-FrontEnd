import {create} from "zustand";
import {getCart, resetCart, updateCart} from "../apis/cart";

const initialState = {
  store: undefined,
  menus: []
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  // setStore: (store) => {
  //   set((state) => ({...state, store: store}));
  //   // set((state) => ({...state, store})); // 생략가능
  // },
  // addMenu: (menu) => {
  //   set((state) => ({...state, menus: [...state.menus, menu]}));
  // },
  addMenu: (menu, store) => {
    set((state) => ({...state, menus: [...state.menus, menu], store}));
    updateCart(store, get().menus);
  },
  fetchCart: async() => {
    const data = await getCart();
    set(data);
  },
  reset: () => {
    set(() => ({ ...initialState }));
    resetCart();
  }
}));
export default useCartStore;