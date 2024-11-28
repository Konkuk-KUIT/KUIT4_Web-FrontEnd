import {Link, useNavigate} from "react-router-dom";
import Button from "../Button";
import {OrderBarWrapper, OrderWrapper, PriceWrapper, ButtonWrapper} from './OrderBar.styles';
import HomeIndicator from '../../assets/home-indicator.svg';

const OrderBar = () => {
  const menus = [];
  const store = null;

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
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </div>
        </PriceWrapper>
        <ButtonWrapper>
          <Link to="/cart">
            <Button onClick={handleOrder} type="button" size="lg">
              {store?.name && `${store.name}에서 `}주문하기
            </Button>
          </Link>
        </ButtonWrapper>
      </OrderWrapper>
      <img src={HomeIndicator} alt="home-indicator" />
    </OrderBarWrapper>
  );
};
export default OrderBar;
