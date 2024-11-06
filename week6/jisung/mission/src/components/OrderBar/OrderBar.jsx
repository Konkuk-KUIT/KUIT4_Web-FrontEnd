import Button from "../Button";
import {
  OrderBarContainer,
  TotalPriceText,
  TotalPriceNum,
} from "./OrderBar.styles";

const OrderBar = () => {
  const menus = [];
  const store = null;
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
