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
  console.log(store)
  const handleOrder = () => {};

  return (
    <OrderBarContainer>
      <div>
        <TotalPriceText>총 주문금액</TotalPriceText>
        <TotalPriceNum>
          {menus.reduce((acc, cur) => acc + cur.price, 0)}원
        </TotalPriceNum>
      </div>
      <Button onClick={handleOrder} type="button" size="lg">
        {store?.name && `${store.name}에서 `}주문하기
      </Button>
    </OrderBarContainer>
  );
};

export default OrderBar;
