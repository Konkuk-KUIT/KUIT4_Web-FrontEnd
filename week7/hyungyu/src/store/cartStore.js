import { create } from "zustand"; 

const initialState = {
    store: undefined,
    menus: [],
}

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,
    menusFrom: initialState.store,
    // addMenu: (menu) => {
    //     set((state) => ({...state, menus: [...state.menus, menu]}));
    // },
    addMenu: (menu) => {
        set((state) => {
            const existingMenu = state.menus.find((m) => m.id === menu.id);
            if (existingMenu) {
                // 메뉴가 이미 있으면 수량 증가
                return {
                    ...state,
                    menus: state.menus.map((m) =>
                        m.id === menu.id ? { ...m, quantity: m.quantity + 1 } : m
                    ),
                };
            }
            // 새로운 메뉴를 추가
            return {
                ...state,
                menus: [...state.menus, { ...menu, quantity: 1 }],
            };
        });
    },
    setMenusFrom: (store) => {
        set((state) => ({...state, menusFrom: store}));
    },
    setStore: (store) => {
        set((state) => ({...state, store: store}));
    },
    resetStore: () => {
        set((state) => ({...state, menus: initialState.menus, menusFrom: initialState.store}));
    },
}));

export default useCartStore;