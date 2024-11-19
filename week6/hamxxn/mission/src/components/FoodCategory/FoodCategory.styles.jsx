import styled from "styled-components";

const CategoryWrapper = styled.div`
  background-color: #fafafb;
  width: 108px;
  height: 74px;
  padding: 12px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  > img {
    width: 28px;
  }
  > p {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
`;
export { CategoryWrapper };
