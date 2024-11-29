import styled from "styled-components";

const CategoryTitle = styled.div`
  width: var(--width-variable);
  font-size: 25px;
  font-weight: 700;
`;
const StoreDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--width-variable);
  margin-bottom: var(--order-bar);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }
`;
export { CategoryTitle, StoreDetailWrapper };
