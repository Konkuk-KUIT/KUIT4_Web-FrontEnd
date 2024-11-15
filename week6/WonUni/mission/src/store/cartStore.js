import { create } from "zustand";


const initialState = {
    store: undefined,
    menus: []
}

const useCartStore = create((set) =>({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, store) => {
        set((state)=>({...state, menus:[...state.menus, menu]}));
        console.log(store);
    },
    setStore: (store) => {
        set((state)=>({...state, store: store}));
    },
    resetStore: () => {
        set(initialState);
    },
}));

export default useCartStore;