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
        set((state) => { 
            const menuId = menu.id;
            const existingMenu = state.menus[menuId];
            // 만약 menuId라는 Key가 menus에 없으면 existingMenu는 undefined

            return {
                ...state,
                menus: {
                    ...state.menus,
                    [menuId]: {
                        ...menu,
                        quantity: existingMenu ? existingMenu.quantity + 1 : 1
                        // quantity라는 Key가 없으면 key를 새로 추가함
                        // existingMenu가 undefined면 1로 초기화
                        // 이미 있는 메뉴라면 해당 메뉴의 수량을 1 추가함
                    }
                }
            }
        });
    },
    /* 이런 형태로 저장됨
        menus: {
            1: {
                id: 1,
                name: "토마토 샐러드",
                price: 7600,
                ingredients: "계란, 옥수수, 양파",
                storeId: 1,
                quantity: 5
            },
            2: {
                id: 2,
                name: "샐러드2",
                price: 8000,
                ingredients: "피망, 옥수수, 양파",
                storeId: 1,
                quantity: 3
        }
    */

    setStore: (store) => { // 외부에서 setStore 사용할 때 인자로 가게를 받음
        set((state) => ({
            ...state,
            store: store
        }))
    },
    clearCartAndAddMenu: (store, menu) => {
        set((state) => ({
            ...state,
            store: store,
            menus: {
                [menu.id]: {
                    ...menu,
                    quantity: 1
                }
            }
        }))
    },
}));

export default useCartStore;