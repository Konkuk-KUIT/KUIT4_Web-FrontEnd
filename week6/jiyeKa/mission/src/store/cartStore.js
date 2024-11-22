import {create} from "zustand";
import {getCart, updateCart} from "../apis/cart"

const initialState = {
    store: undefined,
    menus: [],
    // storeList: stores,
}

const useCartStore = create((set, get)=> ({
    store: initialState.store,
    menus: initialState.menus,
    // storeList: initialState.storeList,

    addMenu: (menu, store) => {
        set((state) => ({...state, store, menus: [...state.menus, menu]}))
        updateCart(store, get().menus);

    },

    fetchCart: async () => {
        const data = await getCart();
        set(data)
    },
    
    resetCart: ()=>{
        set((state)=>({...state,menus:[]}))
    },
    // deleteMenu
    // clearMenu 구현..
}));

export default useCartStore;