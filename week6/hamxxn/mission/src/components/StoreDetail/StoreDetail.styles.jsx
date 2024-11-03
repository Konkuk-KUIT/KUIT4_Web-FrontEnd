import styled from "styled-components";

const StoreImg = styled.div`
  background-color: #ececec;
  width: 54px;
  height: 54px;
  margin-right: 20px;
  border-radius: 8px;
`;
const StoreWrapper = styled.div`
  height: 116px;
  width: var(--width-variable);
  display: flex;
  padding: 20px 0;
  box-sizing: border-box;
`;
const StoreDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  text-align: left;

  .bold {
    color: black;
    font-size: 17px;
    font-weight: 600;
  }
`;
export { StoreDescWrapper, StoreWrapper, StoreImg };
