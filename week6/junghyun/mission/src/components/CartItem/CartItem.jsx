import {CartItemWrapper, ItemDescWrapper, ButtonWrapper} from "./CartItem.styles";
import Arrow from "../../assets/arrow-prev.svg";

const CartItem = () => {
  return (
    <CartItemWrapper>
      <img src="https://placehold.co/54x54" alt="토마토 샐러드" />
      <ItemDescWrapper>
        <div className="itemName">토마노 샐러드</div>
        <div className="itemIngredients">추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</div>
        <div className="itemPrice">10,600원</div>
      </ItemDescWrapper>
      <ButtonWrapper>
        <div className="itemNum">1개</div>
        <img src={Arrow} alt="right chevron" />
      </ButtonWrapper>
    </CartItemWrapper>
  );
};
export default CartItem;