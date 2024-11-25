import styled from 'styled-components';

const StatusBarWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #FFFFFF;
  opacity: 1;

> .time {
    margin-top: 22px;
    margin-left: 36px;
    margin-bottom: 12px;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
  }

> .status {
    margin-top: 19px;
    margin-right: 26.6px;
    margin-bottom: 15px;
    jsutify-content: space-around;

  > img {
      margin-left: 8px;
    }
}
`;
export default StatusBarWrapper;