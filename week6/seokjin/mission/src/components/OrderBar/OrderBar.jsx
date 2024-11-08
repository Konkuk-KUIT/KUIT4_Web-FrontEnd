import Button from "../Button";
import { OrderbarStyles } from "./OrderBar.styles";
//하단바를 의미하는 것임.
const OrderBar = () => {
  const menus = [];
  const store = null;
  const handleOrder = () => {};

  return (
    <OrderbarStyles>
      <div className="order-content">
        <div className="text-group">
        <p className="total-price">총 주문금액</p>
        <p className="price-num">{menus.reduce((acc, cur) => acc + cur.price, 0)}원</p>
        </div>
        <Button onClick={handleOrder} type="button" size="lg">
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
      </div>
    </OrderbarStyles>
  );
};

export default OrderBar;
