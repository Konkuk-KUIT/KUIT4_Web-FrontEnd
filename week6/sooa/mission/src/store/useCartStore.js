import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  minPrice: undefined,
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  minPrice: initialState.minPrice,

  addMenu: (menu) => {
    console.log("addMenu called with:", menu); // 함수 호출 확인
    set((state) => ({ ...state, menus: [...state.menus, menu] })); // 상태 업데이트
    console.log("Updated menus:", useCartStore.getState().menus); // 상태 확인
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
  setMinPrice: (minPrice) => {
    set((state) => ({ ...state, minPrice: minPrice }));
  },
}));

export default useCartStore;
