import styled from "styled-components";

const StyledScrollContainer = styled.div`
    max-height: 586px; 
    overflow-y: scroll;
    padding-bottom: 20px; 

    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비를 0으로 설정 */
    background: transparent; /* 스크롤바의 배경을 투명하게 설정 */
  }
`;

export default StyledScrollContainer;