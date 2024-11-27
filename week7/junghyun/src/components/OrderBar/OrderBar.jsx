import {useNavigate} from "react-router-dom";
import Button from "../Button";
import {OrderBarWrapper, OrderWrapper, PriceWrapper, ButtonWrapper} from './OrderBar.styles';
import HomeIndicator from '../../assets/home-indicator.svg';
import useCartStore from "../../store/cartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <OrderBarWrapper>
      <OrderWrapper>
        <PriceWrapper>
          <div className="totalPriceText">총 주문금액</div>
          <div className="totalPriceNumber">
            {menus.reduce((acc, cur) => acc+cur.price, 0).toLocaleString('ko-KR')}원
          </div>
        </PriceWrapper>
        <ButtonWrapper>
          <Button onClick={handleOrder} type="button" size="lg">
            {store?.name && `${store.name}에서 `}주문하기
          </Button>
        </ButtonWrapper>
      </OrderWrapper>
      <img src={HomeIndicator} alt="home-indicator" />
    </OrderBarWrapper>
  );
};
export default OrderBar;
