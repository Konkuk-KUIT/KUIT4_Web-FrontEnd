import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { BottomOrderBar, TotalPriceInKor, TotalPrice, ToTalPriceContainer } from "./OrderBar.styles";
import useCartStore from "../../store/cartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const handleOrder = () => {
    navigate("/cart"); 
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
