import styled from "styled-components";

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
