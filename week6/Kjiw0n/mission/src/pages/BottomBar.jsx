import styled from "styled-components";
import Button from "../components/Button";

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <BottomBarTextWrapper>
        <BottomBarTitle>총 주문금액</BottomBarTitle>
        <TotalPrice>12,100원</TotalPrice>
      </BottomBarTextWrapper>
      <Button size="lg">주문하기</Button>
    </BottomBarContainer>
  );
};

export default BottomBar;

const BottomBarContainer = styled.footer`
  width: 390px;
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
const BottomBarTextWrapper = styled.div`
  gap: 5px;
`;

const BottomBarTitle = styled.h4`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TotalPrice = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
