import styled from "styled-components";

export const StoreButton = styled.button`
  padding-bottom: 88px;
  background: none; /* 배경색 제거 */
  border: none; /* 테두리 제거 */
  padding: 0; /* 기본 패딩 제거 */
  cursor: pointer; /* 마우스 커서 포인터로 설정 */
  outline: none; /* 포커스 outline 제거 */
`

export const StoreItemContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

export const StoreImageRectangle = styled.div`
  width: 54px;
  height: 54px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #ececec;
  margin: 16px 17px 46px 24px; // padding을 적용하면 bkgd-color가 padding영역에도 다 적용됨
`;

export const StoreInfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 17px;
  align-items: flex-start;
`;

export const StoreHeader = styled.div`
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 600;
  color: #333d4b;
`;

export const StoreDetail = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 400;
  color: #6b7684;
`;
