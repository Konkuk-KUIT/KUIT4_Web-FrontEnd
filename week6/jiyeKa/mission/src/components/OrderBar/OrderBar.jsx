import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { BottomOrderBar, TotalPriceInKor, TotalPrice, ToTalPriceContainer } from "./OrderBar.styles";

const OrderBar = () => {
  const menus = [];
  const store = null;
  const navigate=useNavigate();
  const handleOrder = () => {
    navigate("/cart"); //Link처럼 /cart로 이동 -> 이동 안됨 문제 해결
  };

  return (
    <BottomOrderBar>
      <ToTalPriceContainer>
        <TotalPriceInKor>총 주문금액</TotalPriceInKor>
        <TotalPrice>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</TotalPrice>
      </ToTalPriceContainer>
      <Button onClick={handleOrder} type="button" size="lg">
        {store?.name && `${store.name}에서 `}주문하기
      </Button>
    </BottomOrderBar>
  );
};

export default OrderBar;
