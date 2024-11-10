import styled from "styled-components";

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > .price-desc {
    font-size: 15px;
    font-weight: 400;
    color: #6b7684;
    margin-bottom: 5px;
  }
  > .price {
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
  }
`;
const OrderContainer = styled.div`
  width: var(--width-variable);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px #0000001a;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export { PriceWrapper, OrderContainer };
