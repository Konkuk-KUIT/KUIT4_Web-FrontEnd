import styled from "styled-components";
import { ItemTitle, ItemContent } from "../../styles/FontStyle";

const CartItem = () => {
  return (
    <CartItemContainer>
      <ItemImg src="http://placehold.co/54" />

      <ItemInfoContainer>
        <ItemTitle>토마토 샐러드</ItemTitle>
        <ItemContent>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</ItemContent>
        <ItemContent>10,600원</ItemContent>
      </ItemInfoContainer>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
`;

const ItemImg = styled.img``;

const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
