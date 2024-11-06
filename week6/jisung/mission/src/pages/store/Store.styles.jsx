import styled from "styled-components";

// 사각형 영역 간의 간격은 padding으로 조절
// div, span과 display: inline-block 속성 사용
// align-items로 텍스트 위치 정렬

export const StoreInfoContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #e0e0e0; /* 회색 하단 경계선 */
  padding-bottom: 14px;
`;

export const StoreName = styled.div`
  box-sizing: border-box; // padding너비 포함해서 너비 계산
  display: flex;
  align-items: flex-end; // 수직 하단 정렬
  padding: 26px 0 2px 24px;
  font-family: "Pretendard";
  font-size: 26px;
  font-weight: bold;
  color: #191f28;
`;
export const StoreRate = styled.span`
  display: inline-block; /* 인라인 블록으로 설정 */
  padding: 7px 0 12px 23px;
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 500;
  color: #4e5968;
`;

export const StoreReviewCnt = styled.span`
  display: inline-block; /* 인라인 블록으로 설정 */
  padding: 7px 0 12px 9px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  color: #4e5968;
`;

export const StoreDetailedInfo = styled.span`
  display: inline-block; /* 인라인 블록으로 설정 */
  padding: 9px 0 1px 24px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  color: #4e5968;
`;

export const MenuCategory = styled.div`
    padding: 28px 0 11px 24px;
    font-family: "Pretendard";
  font-size: 17px;
  font-weight: 600;
  color: #6B7684;
`