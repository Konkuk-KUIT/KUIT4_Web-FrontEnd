import Button from "../Button";
import {
  Wrapper,
  TopWrapper,
  BottomWrapper,
  PriceWrapper,
} from "./OrderBar.styles";

const OrderBar = () => {
  const menus = [];
  const store = null;
  const handleOrder = () => {};

  return (
    <Wrapper>
      <TopWrapper>
        <PriceWrapper>
          <div className="price-description">총 주문금액</div>
          <div className="price">
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </div>
        </PriceWrapper>
        <Button onClick={handleOrder} type="button" size="lg">
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
      </TopWrapper>
      <BottomWrapper>
        <div></div>
      </BottomWrapper>
    </Wrapper>
  );
};

export default OrderBar;
