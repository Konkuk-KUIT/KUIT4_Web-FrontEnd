import styled from "styled-components";

const MenuImg = styled.div`
  background-color: #ececec;
  width: 54px;
  height: 54px;
  margin-right: 20px;
  border-radius: 8px;
`;
const MenuWrapper = styled.div`
  height: 116px;
  width: var(--width-variable);
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
`;
const MenuDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  width: 55%;
  margin-right: 20px;
  > * {
    margin-bottom: 8px;
  }
  > .menu-name {
    color: black;
    font-size: 17px;
    font-weight: 600;
    display: flex;
    > p {
      margin-right: 5px;
    }
    > p.isBest {
      color: #3182f6;
    }
  }
`;
const OrderBtn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  > p {
    margin-right: 10px;
  }
`;

export { MenuWrapper, MenuImg, MenuDescWrapper, OrderBtn };
