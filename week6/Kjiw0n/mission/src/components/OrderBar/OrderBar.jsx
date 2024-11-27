import styled from "styled-components";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { GrayContent } from "../../styles/FontStyle";

const OrderBar = ({ menus = [], store = null }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <OrderBarContainer>
      <OrderBarTextWrapper>
        <OrderBarTitle>총 주문금액</OrderBarTitle>
        <GrayContent>
          {menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}원
        </GrayContent>
      </OrderBarTextWrapper>
      <Button onClick={handleOrder} size="lg">
        {store?.name ? `${store.name}에서 ` : ""}주문하기
      </Button>
    </OrderBarContainer>
  );
};

export default OrderBar;

const OrderBarContainer = styled.footer`
  width: 100%;
  height: 111px;
  position: absolute;
  bottom: 0;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 21px 24px;
  box-sizing: border-box;
`;

const OrderBarTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderBarTitle = styled.h4`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
