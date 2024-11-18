import styled from "styled-components";
const Wrapper = styled.div`
  height: 129px;
  width: var(--width-variable);
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  > .price-desc {
    font-size: 17px;
    font-weight: 500;
    color: #6b7684;
    margin-bottom: 10px;
  }
`;
export { Wrapper };
