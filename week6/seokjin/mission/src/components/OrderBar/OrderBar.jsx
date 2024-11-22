import useCartStore from "../../store/cartStore";
import Button from "../Button";
import { OrderbarStyles } from "./OrderBar.styles";

//하단바를 의미하는 것임.
const OrderBar = () => {
  //const menus = [];
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store); // store 가져오기
  
  //아래 3개 추가
  const minOrderPrice = useCartStore((state) => state.minOrderPrice);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const isUnderMinOrder = totalPrice < minOrderPrice;

  //const store = null;
  const handleOrder = () => { //공란작성
    if (isUnderMinOrder) {
      alert("최소 주문 금액을 충족해야 합니다.");
    }
  };

  return (
    <OrderbarStyles>
      <div className="order-content">
        <div className="text-group">
        <p className="total-price">총 주문금액</p>
        <p className="price-num">{totalPrice}원</p> 
        </div>
        <Button onClick={handleOrder} type="button" size="lg" disabled={isUnderMinOrder}>
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
      </div>
    </OrderbarStyles>
  );
};

export default OrderBar;
