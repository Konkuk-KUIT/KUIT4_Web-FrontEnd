import useCartStore from "../../store/cartStore";
import Button from "../Button";
import { OrderbarStyles } from "./OrderBar.styles";
import { Link } from "react-router-dom";

//하단바를 의미하는 것임.
const OrderBar = () => {
  //const menus = [];
  
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store); // store 가져오기
  /*
  //아래 3개 추가
  const minOrderPrice = useCartStore((state) => state.minOrderPrice);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const isUnderMinOrder = totalPrice < minOrderPrice;
  */

  //const store = null;
  const handleOrder = () => { 
    /*
    if (isUnderMinOrder) {
      alert("최소 주문 금액을 충족해야 합니다.");
    }*/
  };

  return (
    <OrderbarStyles>
      <div className="order-content">
        <div className="text-group">
        <p className="total-price">총 주문금액</p>
        <p className="price-num">{menus.reduce((acc, cur) => acc + cur.price, 0)}원</p> 
        </div>
        <Link to={"/cart"}>
        <Button onClick={handleOrder} type="button" size="lg" >
          {store?.name && `${store.name}에서 `}주문하기
        </Button>
        </Link>
      </div>
    </OrderbarStyles>
  );
};

export default OrderBar;
