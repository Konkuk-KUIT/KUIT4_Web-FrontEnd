import Button from "../Button";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import { Wrapper, TopWrapper, PriceWrapper } from "./OrderBar.styles";

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
        <Link to="/cart">
          <Button onClick={handleOrder} type="button" size="lg">
            {store?.name && `${store.name}에서 `}주문하기
          </Button>
        </Link>
      </TopWrapper>
      <BottomBar />
    </Wrapper>
  );
};

export default OrderBar;
