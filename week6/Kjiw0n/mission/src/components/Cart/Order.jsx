import styled from "styled-components";
import Button from "../Button";
import CartInfo from "./CartInfo";

const Order = ({ isUnderMinimumPrice }) => {
  return (
    <>
      <CartInfo orderPrice={12600} deliveryPrice={2000} />

      <BtnContainer>
        {isUnderMinimumPrice && (
          <MinimumPriceInfo>최소 주문금액 13,000원</MinimumPriceInfo>
        )}
        <Button size="xl" disabled={isUnderMinimumPrice}>
          12,600원 결제하기
        </Button>
      </BtnContainer>
    </>
  );
};

export default Order;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 12px;
`;

const MinimumPriceInfo = styled.p`
  color: #6b7684;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
