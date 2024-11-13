import { create } from 'zustand' // npm install zustand

// cartStore.js파일은 MenuItem에서 '담기'버튼을 눌렀을 때
// 해당 메뉴 정보와 가게 정보(메뉴 가격, 가게 이름, 가게의 최수주문금액 등)를
// 전역으로 관리하기 위해 생성한 파일임

const initialState = { // 아무것도 담지 않았을 떄의 초기값을 담은 객체
    store: undefined,  // 가게 정보가 없으니까 초기값 undefined로 설정
    menus: [], // 아무 메뉴도 담기지 않았으므로 빈 배열로 선언
};

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu) => { // 외부에서 addMenu 사용할 때 인자로 메뉴를 받음
        set((state) => ({ 
            ...state, 
            menus: [ ...state.menus, menu] 
        }));
    },
    setStore: (store) => { // 외부에서 setStore 사용할 때 인자로 가게를 받음
        set((state) => ({
            ...state, 
            store: store 
        }))
    }
}));

export default useCartStore;