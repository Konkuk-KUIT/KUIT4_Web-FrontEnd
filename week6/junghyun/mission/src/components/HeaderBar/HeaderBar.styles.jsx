import styled from 'styled-components';

const HeaderBarWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 47px;
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;

> img {
    margin-top: 10px;
    margin-left: 17px;
    margin-bottom: 13.52px;
    width: 9.95px;
    height: 17.48px;
  }

> .cancel {
    margin-top: 9px;
    margin-right: 15px;
    margin-bottom: 13px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.09px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
  }
`;
export default HeaderBarWrapper;