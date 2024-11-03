import styled from "styled-components";

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 10px;
  }
`;
const OrderContainer = styled.div`
  width: var(--width-variable);
  height: 111px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px #0000001a;

  > .price-desc {
    font-size: 15px;
    font-weight: 400;
    color: #6b7684;
  }
  > .price {
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
  }
`;

export { PriceWrapper, OrderContainer };
