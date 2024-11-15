import { create } from "zustand";

const initialState = {
    store: undefined,
    menus: [],
}

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu) => {
        set((state) => {
          // 현재 선택된 store와 메뉴 추가하려는 store가 다른 경우
          if (state.store?.id !== menu.storeId) {
            return { ...state, menus: [menu] }; // 새로운 store로 변경되면 기존 메뉴 초기화
          }
          return { ...state, menus: [...state.menus, menu] };
        });
    },

    setStore: (store) => {
        set((state) => {
          if (state.store?.id !== store.id) {
            // store가 변경되면 menus 초기화
            return { ...state, store, menus: [] };
          }
          return { ...state, store };
        });
      },
    }));



export default useCartStore