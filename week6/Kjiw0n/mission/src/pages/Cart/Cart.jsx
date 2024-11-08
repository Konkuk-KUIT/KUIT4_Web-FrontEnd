import styled from "styled-components";
import CartItem from "../../components/Cart/CartItem";
import Button from "../../components/Button";
import BackBtn from "../../components/BackBtn";

const Cart = () => {
  return (
    <CartContainer>
      <BackBtn />
      <Line></Line>

      <CartItemContainer>
        <StoreName>샐로리 한남점</StoreName>
        <CartItem />
        <Line1></Line1>
        <CartMore>더 담기 +</CartMore>
      </CartItemContainer>
      <Line></Line>

      <CartInfoContainer>
        <Wrapper>
          <CartContent>주문금액</CartContent>
          <CartPrice>10,600원</CartPrice>
        </Wrapper>
        <Wrapper>
          <CartContent>배달요금</CartContent>
          <CartPrice>2,000원</CartPrice>
        </Wrapper>

        <TotalWrapper>
          <CartTitle>총 결제금액</CartTitle>
          <CartTotalPrice>12,600원</CartTotalPrice>
        </TotalWrapper>
      </CartInfoContainer>

      <BtnContainer>
        <Button size="xl">12,600원 결제하기</Button>
      </BtnContainer>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 390px;
  height: 16px;
  background: #f2f4f6;
`;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px 0 0 24px;
`;

const StoreName = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 12px;
`;

const Line1 = styled.div`
  width: 390px;
  height: 1px;
  background: #f2f4f6;
`;

const CartMore = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  box-sizing: border-box;
`;

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const CartContent = styled.p`
  color: #8b95a1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CartPrice = styled.p`
  color: #505967;
  text-align: right;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CartTitle = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CartTotalPrice = styled.p`
  color: #4e5968;
  text-align: right;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 12px;
`;
