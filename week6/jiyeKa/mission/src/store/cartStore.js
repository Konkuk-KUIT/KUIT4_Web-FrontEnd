import {create} from "zustand";
import stores from "../models/stores";

const initialState = {
    store: undefined,
    menus: [],
    storeList: stores,
}

const useCartStore = create(set => ({
    store: initialState.store,
    menus: initialState.menus,
    storeList: initialState.storeList,

    addMenu: (menu) => {
        set((state) => ({...state, menus: [...state.menus, menu]}))
    },
    setStore: (store) => {
        set((state) => ({...state, store: store}))
    },
    resetCart: ()=>{
        set((state)=>({...state,menus:[]}))
    },
}));

export default useCartStore;