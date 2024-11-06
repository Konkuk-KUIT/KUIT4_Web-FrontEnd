import styled from "styled-components";

export const OrderBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; // width를 100%로 하면 '주문하기'버튼이 잘림
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  box-sizing: border-box; // 이게 있어야 width를 100%로 해도 오른쪽에서 안잘림(패딩이 포함된 상태로 너비 계산)
  justify-content: space-between;
  padding: 16px 24px 30px 24px;
  background-color: white;
`;

export const TotalPriceText = styled.div`
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400; //regular
  color: #333d4b;
  margin-bottom: 5px;
`;

export const TotalPriceNum = styled.div`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 600; //semibold
  color: #4e5968;
`;
