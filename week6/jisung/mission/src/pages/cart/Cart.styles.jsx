import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const OrderInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const StoreName = styled.div`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 700;
  color: #6b7684;
  padding: 26px 0 12px 24px;
`;

export const MinDeliveryPriceAlert = styled.div`
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  color: #f04452;
  padding: 27px 24px 13px 0;
`;

export const AddMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 59px;

  // align-items, justify-content 주면
  // AddMore 버튼의 위치를 padding으로 중앙 정렬 할 필요 없음
`;

export const AddMore = styled.button`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 600;
  color: #3182f6;

  background: none; /* 배경색 제거 */
  border: none; /* 테두리 제거 */
  padding: 0; /* 기본 패딩 제거 */
  cursor: pointer; /* 마우스 커서 포인터로 설정 */
  outline: none; /* 포커스 outline 제거 */
`;

export const PriceInfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) =>
    props.$istotalprice ? "16px 24px 18px 24px" : "8px 24px 10px 24px"};
`;

export const PriceInfoTxt = styled.span`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 400;
  color: ${(props) => (props.$istotalprice ? "#4E5968" : "#8B95A1")};
`;

export const PriceInfoPrice = styled.span`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: ${(props) => (props.$istotalprice ? "600" : "400")};
  color: ${(props) => (props.$istotalprice ? "#505967" : "#4E5968")};
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 34px;
`;

export const MinDeliveryPriceNoti = styled.div`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 400;
  color: #6b7684;
  margin-bottom: 19px;
`;

// 기본값을 false로 설정
PriceInfoTxt.defaultProps = {
  istotalprice: "false",
};

PriceInfoPrice.defaultProps = {
  istotalprice: "false",
};

PriceInfoRow.defaultProps = {
  istotalprice: "false",
};
