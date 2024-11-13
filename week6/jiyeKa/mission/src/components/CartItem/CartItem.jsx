import {CartItemWrapper, ItemDescWrapper, ButtonWrapper} from "./CartItem.styles";
import right_arrow from "../../assets/right_arrow.svg";
import storeList from "../../assets/storeList.svg";

const CartItem = () => {
  return (
    <CartItemWrapper>
      <img src={storeList} />
      <ItemDescWrapper>
        <div className="name">토마토 샐러드</div>
        <div className="myOrder">추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</div>
        <div className="price">10,600원</div>
      </ItemDescWrapper>
      <ButtonWrapper>
        <div className="count">1개</div>
        <img src={right_arrow} />
      </ButtonWrapper>
    </CartItemWrapper>
  );
};
export default CartItem;