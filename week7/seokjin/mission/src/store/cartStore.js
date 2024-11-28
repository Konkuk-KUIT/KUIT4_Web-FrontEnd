import { create } from "zustand";

const initialState = {
    store: undefined,
    initialStoreId: null, // 추가: 초기 storeId를 저장할 변수
    menus: [],
}

const useCartStore = create((set) => ({
  store: initialState.store,
  initialStoreId: initialState.initialStoreId, // 추가: 초기 storeId 상태
  menus: initialState.menus,

  addMenu: (menu)=>{
      set((state)=>({...state,menus:[...state.menus, menu]}));
  },
  setStore: (store)=>{
      set((state)=>({...state, store: store, 
      // 초기 storeId가 설정되지 않은 경우에만 저장
      initialStoreId: state.initialStoreId || store.id,
      }));
  },
  clearCart: ()=>{
      set((state)=>({...state,
        initialStoreId: initialState.initialStoreId, // 초기 storeId도 초기화
        menus: [] }));
  },
  setInitialStoreId: (id) => { // 추가: 초기 storeId를 설정하는 액션
    set((state) => ({
      ...state,
      initialStoreId: id,
    }));
  }
}));



export default useCartStore