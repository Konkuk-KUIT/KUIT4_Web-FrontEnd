import styled from 'styled-components';

// 그리드 컨테이너 설정
export const GridContainer = styled.div`
  width: 342px;
  height: 326px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* GridRow 간의 간격 */
  margin: 0 24px;
`;

// 각 행을 묶는 Row 스타일
export const GridRow = styled.div`
  display: flex;
  justify-content: space-between; /* 3개의 열로 설정 */
  gap: 9px; /* GridItem 간의 간격 */
`;

// 그리드 아이템 스타일
export const GridItem = styled.button`
  display: flex;
  width: 108px;
  height : 74px;
  box-sizing: border-box;
  padding: 12px 0px 13px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-radius: 8px;
  background: #FAFAFB;
  border: none;
  cursor: pointer;
  /* 마지막 GridItem에서 오른쪽 간격 없애기 */
  &:last-child {
    margin-right: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 100%;
  }

  img {
    width: 28px;
    height: 28px;
  }

  p {
    margin: 0;
    color: #333D4B;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

