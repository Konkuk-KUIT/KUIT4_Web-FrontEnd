import { useNavigate } from "react-router-dom";
import useCartStore from "../../pages/cartStore";
import Button from "../Button";
import {
  OrderBarContainer,
  TotalPriceText,
  TotalPriceNum,
} from "./OrderBar.styles";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
    // cartStore에서 menus배열을 가져옴
  const store = useCartStore((state) => state.store);
  // console.log(store)
  const totalPrice = (menus ? Object.values(menus) : []).reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  // Object.values(menus)를 통해 메뉴 객체의 값을 배열 형태로 가져옴
  // menus가 빈 배열일 경우 값을 0으로 초기화

  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleOrder = () => {
    navigate(`/cart`);
  };

  return (
    <OrderBarContainer>
      <div>
        <TotalPriceText>총 주문금액</TotalPriceText>
        <TotalPriceNum>
          {totalPrice}원
        </TotalPriceNum>
      </div>
      {/* <Button onClick={() => handleOrder()} type="button" size="lg">
        {store?.name && `${store.name}에서 `}주문하기
      </Button> */}
      <button type="button" onClick={() => handleOrder()}>
      {store?.name && `${store.name}에서 `}주문하기
      </button>
    </OrderBarContainer>
  );
};

export default OrderBar;
