import styled from "styled-components";

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.priceflexdirection || "row"};
  > .price-desc {
    color: #6b7684;
    padding-right: 5px;
  }
  > .price {
    color: #4e5968;
  }
  > * {
    margin-bottom: 7px;
  }
`;
const OrderContainer = styled.div`
  width: var(--width-variable);
  height: 111px;
  display: flex;
  //여기
  flex-direction: ${(props) => props.divflexdirction || "row"};
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px #0000001a;
  box-sizing: border-box;
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
  > img {
    height: 34px;
  }
`;

export { PriceWrapper, OrderContainer };
