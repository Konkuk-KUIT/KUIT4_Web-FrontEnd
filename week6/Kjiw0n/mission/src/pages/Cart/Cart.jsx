import styled from "styled-components";
import BackBtn from "../../components/BackBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartList from "../../components/Cart/CartList";
import Order from "../../components/Cart/Order";

const Cart = () => {
  const navigate = useNavigate();
  const [isUnderMinimumPrice, setIsUnderMinimumPrice] = useState(true);

  return (
    <>
      <CartHeader>
        <BackBtn onClick={() => navigate(-1)} />
        <Cancle>주문 취소</Cancle>
      </CartHeader>
      <Line></Line>

      <CartList isUnderMinimumPrice={isUnderMinimumPrice} />
      <Line></Line>

      <Order isUnderMinimumPrice={isUnderMinimumPrice} />
    </>
  );
};

export default Cart;

const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px 10px 10px;
`;

const Cancle = styled.p`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Line = styled.div`
  width: 390px;
  height: 16px;
  background: #f2f4f6;
`;
