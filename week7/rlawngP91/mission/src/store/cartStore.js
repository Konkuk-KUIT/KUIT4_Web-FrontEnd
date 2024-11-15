import { create } from "zustand";

const initialState = {
    store: undefined,
    menus: [],
};

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, newStore) => {
        set((state) => {
            // 장바구니가 비어있는 경우
            if (!state.store || state.menus.length === 0) {
                return {
                    store: newStore,
                    menus: [menu]
                };
            }

            // 같은 가게의 메뉴인 경우
            if (state.store.id === newStore.id) {
                return {
                    ...state,
                    menus: [...state.menus, menu]
                };
            }

            // 다른 가게의 메뉴인 경우 - 여기서는 실제로 추가하지 않음
            return state;
        });
    },
    // addMenu: (menu) => { set((state) => ({ ...state, menus: [...state.menus, menu]})); },
    setStore: (store) => { set((state) => ({ ...state, store: store })); },
    resetCart: () => { set(initialState);   },
})
);

export default useCartStore;