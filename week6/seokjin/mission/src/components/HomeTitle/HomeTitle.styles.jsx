import styled from "styled-components";

export const HomeTitleStyles = styled.div`
  display: inline-flex;
  padding: 25px 68px 4px 24px;
  align-items: center;
  width: 390px;
  height: 93px;
  box-sizing: border-box;

  .group {
    width: 298px;
    height: 64px;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .main-title {
    margin: 0;
    color: #191F28;
    font-family: 'Pretendard', sans-serif;
    font-size: 26px;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }

  .sub-title {
    margin: 0;
    color: #333D4B;
    font-family: 'Pretendard', sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    white-space: nowrap; /* 개행 없이 한 줄로 표시 */
  }
`;
