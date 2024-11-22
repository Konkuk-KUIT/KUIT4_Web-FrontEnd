import styled from 'styled-components';

export const StoresWrapper = styled.div`
  width: 390px;
  position: relative;
  top:41px;

`;

export const StoresTitle = styled.div`
  width: 390px;
  height: 59px;
  // position: absolute;
  top: 0;
  padding: 26px 298px 2px 24px;
  box-sizing: border-box;
  white-space: nowrap; 
  font-weight: bold;
  font-size:26px;
  line-height: 31px;
  font-family: Pretendard;

  text-align: left;
  text-color: #191F28;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // 스크롤바 숨기기
  height: 586px; /* 리스트 영역에 고정된 높이 설정 */
  overflow-y: auto; /* 이 컴포넌트에서만 스크롤 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE 및 Edge에서 스크롤바 숨기기 */
  
  &::-webkit-scrollbar {
    width: 0; /* Webkit 기반 브라우저에서 스크롤바 숨기기 */
    background: transparent; /* 배경을 투명하게 */
  }
`
