import { useSearchParams } from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar";
import BottomBar from "../../assets/bottomBar.svg";
import Button from "../../components/Button";
import {
  OrderPayWrapper,
  OrderItemWrapper,
  OrderStore,
  MoreOrderBtn,
  OrderBar,
} from "./Cart.styles";
import Warning from "../../assets/warning.svg";
import OrderMenuItem from "../../components/OrderMenuItem/OrderMenuItem";
import Plus from "../../assets/plus.svg";

const OrderDiv = ({ menu }) => {
  return (
    <>
      <OrderItemWrapper>
        <OrderStore>
          <div className="store-name">샐러리 한남점</div>
          <div className="price-warning">
            <p>최소금액 미달 </p>
            <img src={Warning} alt="warning icon" />
          </div>
        </OrderStore>
        <OrderMenuItem menu={menu} />
        <MoreOrderBtn>
          <p>더 담기</p>
          <img src={Plus} alt="plus icon" />
        </MoreOrderBtn>
      </OrderItemWrapper>
      <OrderPayWrapper>
        <div className="price">
          <p>주문 금액</p>
          <p>10,600원</p>
        </div>
        <div className="price">
          <p>배달요금</p>
          <p>10,000,000원</p>
        </div>
        <div className="price total-price">
          <p>총 결제금액</p>
          <p>10,010,600원</p>
        </div>
      </OrderPayWrapper>
    </>
  );
};
const Cart = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const isBest = searchParams.get("isBest") === "true";
  const ingredients = searchParams.get("ingredients")?.split(",");
  const menu = {
    name,
    price,
    isBest,
    ingredients,
  };

  return (
    <>
      <StatusBar back={true} cancel={true} />
      <OrderDiv menu={menu} />
      <OrderBar>
        <div className="price-desc">최소 주문금액 13,000원</div>
        <Button disabled={true} width="350px" height="56px">
          {price}원 결제하기
        </Button>
        <img src={BottomBar} />
      </OrderBar>
    </>
  );
};

export default Cart;
