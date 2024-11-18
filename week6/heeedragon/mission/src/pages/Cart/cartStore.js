import { create } from "zustand";

const initialState = {
    store: undefined,
    menus: []
};

const useCartStore = create(set => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu) => 
        
        //{ set((state) =>
        //({ ...state, menus: [...state.menus, menu] }))
        //},
        
        { set((state) => {
        const existingMenu = state.menus.find((m) => m.id === menu.id);
        
        // 동일한 메뉴가 있는경우
        if (existingMenu) {
            return {
                ...state,
                menus: state.menus.map((m) =>
                    m.id === menu.id
                        ? { ...m, quantity: (m.quantity || 1) + 1 }
                        : m
                ),
            };
        }
        // 동일한 메뉴가 없는 경우
        return {
            ...state,
            menus: [...state.menus, { ...menu, quantity: 1 }],
        };
    })},
        
    setStore: (store) => {
        set((state) => ({ ...state, store: store, menus: [] }))
    }
}));

export default useCartStore;