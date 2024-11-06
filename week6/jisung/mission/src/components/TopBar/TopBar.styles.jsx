import styled from "styled-components";

export const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 15px;
`;

export const TopBarBackButton = styled.button`
  box-sizing: border-box;
  height: 40px;

  background: none; /* 배경색 제거 */
  border: none; /* 테두리 제거 */
  padding: 0; /* 기본 패딩 제거 */
  cursor: pointer; /* 마우스 커서 포인터로 설정 */
  outline: none; /* 포커스 outline 제거 */
`;

export const CancelOrderButton = styled.button`
white-space: nowrap;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  color: #333d4b;

  background: none; /* 배경색 제거 */
  border: none; /* 테두리 제거 */
  padding: 0; /* 기본 패딩 제거 */
  cursor: pointer; /* 마우스 커서 포인터로 설정 */
  outline: none; /* 포커스 outline 제거 */
`