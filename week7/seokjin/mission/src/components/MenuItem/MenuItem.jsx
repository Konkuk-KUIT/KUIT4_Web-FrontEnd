import Button from "../Button";
import { StyledDiv } from "./MenuItem.styles";  
import PlaceholderIcon from "../../assets/placeholder.svg"
import useCartStore from "../../store/cartStore";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const clearCart = useCartStore((state) => state.clearCart); // 장바구니 초기화 함수 추가
  const store = useCartStore((state)=> state.store) // 추가. handleAddMenu 함수에서 메뉴 정보를 addMenu 함수에 전달할 때 선택된 가게의 정보도 함께 넘기도록
  const initialStoreId = useCartStore((state) => state.initialStoreId);
  const setInitialStoreId = useCartStore((state) => state.setInitialStoreId); // 새로운 상태 설정 함수 추가

  const handleAddMenu = () => {
    console.log(initialStoreId); // 메뉴 객체에 storeId가 포함되었는지 확인
    console.log(store.id);
    // 다른 가게의 메뉴가 장바구니에 추가되려는 경우 확인 메시지 출력
    if (initialStoreId !== store.id) {
      const shouldClearCart = window.confirm(
        "장바구니에는 동일한 가게의 메뉴만 담을 수 있습니다. 초기화하시겠습니까?"
      );

      if (shouldClearCart) {
        // 장바구니 초기화 후 새로운 가게의 메뉴 추가
        clearCart();
        setInitialStoreId(store.id); // 초기화 후 초기 storeId 설정
      } else {
        // 초기화를 원하지 않는 경우 함수 종료
        return;
      }
    }
    addMenu(menu);
    /*
    addMenu({
      ...menu,
      storeId: store.id,
      store: store,
      deliveryFee: store.deliveryFee,
      minOrderPrice: store.minDeliveryPrice,
    });*/ // 기존 addMenu(menu);변경
  };

  return (
    <StyledDiv>
      <div className="img-container">
        <img src={PlaceholderIcon} alt="placeholder" />
      </div> 
      <div className="text-container">
        <p className="menu-name">{menu.name}</p>
        <span>{menu.price}</span>
        <p className="menu-ingredient">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </StyledDiv>
  );
};

export default MenuItem;
