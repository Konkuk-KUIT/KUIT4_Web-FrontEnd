import HeaderBar from "../../components/HeaderBar";
import CartItem from "../../components/CartItem/CartItem";
import { Wrapper } from "../../components/Wrapper.styles";
import Warning from "../../assets/warning.svg";
import {
  Bar,
  CartWrapper,
  CalWrapper,
  Cal,
  BottomWrapper,
} from "./Cart.styles";
import Button from "../../components/Button";
import BottomBar from "../../components/OrderBar/BottomBar";

const Cart = () => {
  return (
    <Wrapper>
      <HeaderBar arrow={true} cancel={true} />
      <Bar />
      <CartWrapper>
        <p>샐로리 한남점</p>
        <div>
          <span>최소금액 미달</span>
          <img src={Warning} />
        </div>
      </CartWrapper>
      <CartItem />
      <CartWrapper>
        <span>더 담기 +</span>
      </CartWrapper>
      <Bar />
      <CalWrapper>
        <Cal>
          <span className="description">주문금액</span>
          <span className="price">10,600원</span>
        </Cal>
        <Cal>
          <span className="description">배달요금</span>
          <span className="price">2,000원</span>
        </Cal>
        <Cal>
          <span className="result-description">총 결제금액</span>
          <span className="result-price">12,600원</span>
        </Cal>
      </CalWrapper>
      <BottomWrapper>
        <span>최소 주문금액 13,000원</span>
        <Button type="button" size="xl" disabled={true}>
          12,600원 결제하기
        </Button>
        <BottomBar />
      </BottomWrapper>
    </Wrapper>
  );
};

export default Cart;
