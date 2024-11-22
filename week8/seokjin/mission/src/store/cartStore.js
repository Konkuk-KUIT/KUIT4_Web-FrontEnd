import { create } from "zustand";
import { getCart, updateCart } from "../apis/cart";

const initialState = {
    store: undefined,
    initialStoreId: null, // 추가: 초기 storeId를 저장할 변수
    menus: [],
}

const useCartStore = create((set, get) => ({
  store: initialState.store,
  initialStoreId: initialState.initialStoreId, // 추가: 초기 storeId 상태
  menus: initialState.menus,

  addMenu: (menu, store)=>{
      set((state)=>({...state, store, menus:[...state.menus, menu]}));
      updateCart(store, get().menus);
  },

  //새롭게 추가
  fetchCart: async() => {
    const data = await getCart();
    console.log("Fetched Cart:", data); // 데이터가 잘 오는지 확인
    set(data);
  },

  /*
  setStore: (store)=>{
      set((state)=>({...state, store: store, 
      // 초기 storeId가 설정되지 않은 경우에만 저장
      initialStoreId: state.initialStoreId || store.id,
      })); 
  }, */
  /*
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
    */
}));



export default useCartStore