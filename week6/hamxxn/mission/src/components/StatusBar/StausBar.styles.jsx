import styled from "styled-components";
const StatusWrapper = styled.div`
  background-color: white;
  width: var(--width-variable);
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  height: 47px;
  box-sizing: border-box;
  > .time-wrapper {
    font-size: 17px;
    font-weight: 600;

    display: flex;
    align-items: center;
  }
  > .icons-wrapper {
    display: flex;
    justify-content: space-around;
    > img {
      width: 17px;
      padding-left: 8px;
    }
  }
`;
const Under = styled.div`
  background-color: white;
  width: var(--width-variable);
  height: 41px;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  box-sizing: border-box;
  > img {
    width: 10px;
  }
`;
export { StatusWrapper, Under };
