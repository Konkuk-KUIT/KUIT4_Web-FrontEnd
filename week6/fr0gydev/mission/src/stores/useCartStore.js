import { create } from "zustand";

const initialState = {
  store: null,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => {
      const existingMenu = state.menus.find((m) => m.id === menu.id);
      
      if (existingMenu) {
        const updatedMenus = state.menus.map((m) =>
          m.id === menu.id ? { ...m, quantity: (m.quantity || 1) + 1 } : m
        );
        return {
          ...state,
          menus: updatedMenus
        };
      }
      
      return {
        ...state,
        menus: [...state.menus, { ...menu, quantity: 1 }]
      };
    });
  },

  setStore: (newStore) => {
    const currentStore = get().store;
    const currentMenus = get().menus;

    // 처음 가게를 선택하는 경우
    if (!currentStore) {
      set({ store: newStore });
      return;
    }

    // 다른 가게로 이동하는 경우
    if (currentStore.id !== newStore.id) {
      // menus가 비어있으면 그냥 store만 업데이트
      if (currentMenus.length === 0) {
        set({ store: newStore });
      }
      // menus가 있으면 기존 store 유지
    }
  },

  removeMenu: (menuId) => {
    set((state) => ({
      ...state,
      menus: state.menus.filter((m) => m.id !== menuId)
    }));
  },

  decreaseQuantity: (menuId) => {
    set((state) => {
      const updatedMenus = state.menus.map((m) => {
        if (m.id === menuId && m.quantity > 1) {
          return { ...m, quantity: m.quantity - 1 };
        }
        return m;
      }).filter(m => m.quantity > 0);
      
      return { 
        ...state, 
        menus: updatedMenus
      };
    });
  },

  clearCart: () => {
    set(initialState);
  },
}));

export default useCartStore;