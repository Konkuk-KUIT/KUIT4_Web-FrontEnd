import { create } from "zustand";
import { getCart, updateCart, resetCart } from "../apis/cart";


const initialState = {
    store: undefined,
    menus: []
}

const useCartStore = create((set, get) =>({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, store) => {
        set((state)=>({...state, store, menus:[...state.menus, menu]}));
        updateCart(store, get().menus);
        console.log(store);
    },
    setStore: (store) => {
        set((state)=>({...state, store: store}));
    },
    resetStore: async () => {
        await resetCart(); 
        set(initialState); 
    },
    fetchCart: async() => {
        const data = await getCart();
        set(data);
    },
}));

export default useCartStore;