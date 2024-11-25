import styled from "styled-components";
import WarnningIcon from "/src/assets/WarnningIcon.svg";
import CartItem from "./CartItem";

const CartList = ({ isUnderMinimumPrice }) => {
  return (
    <CartListContainer>
      {isUnderMinimumPrice && (
        <WarnningContainer>
          <p>최소금액 미달</p>
          <WarnningIcon style={{ width: "13px", height: "13px" }} />
        </WarnningContainer>
      )}

      <StoreName>샐로리 한남점</StoreName>
      <CartItem />

      <Line1></Line1>
      <CartMore>더 담기 +</CartMore>
    </CartListContainer>
  );
};

export default CartList;

const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px 0 0 24px;
  position: relative;
`;

const WarnningContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  position: absolute;
  top: 30px;
  right: 25px;

  p {
    color: #f04452;
    text-align: right;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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
