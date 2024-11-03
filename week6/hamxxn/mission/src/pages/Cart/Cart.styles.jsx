import styled from "styled-components";

const OrderItemWrapper = styled.div`
  margin-top: var(--status-bar);
  width: var(--width-variable);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 16px solid #f2f4f6;
  border-bottom: 16px solid #f2f4f6;
  > * {
    padding: 20px 0 0 20px;
  }
`;

const OrderPayWrapper = styled.div`
  width: var(--width-variable);
  margin-bottom: var(--order-bar);
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .price {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 17px;
    font-weight: 500;
    color: #505967;
  }
  .total-price {
    margin-top: 10px;
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
  }
`;
const OrderStore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 20px;
  > .store-name {
    color: #6b7684;
    font-size: 17px;
    font-weight: 700;
  }
  > .price-warning {
    color: #f04452;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    > p {
      margin-right: 5px;
    }
  }
`;
const MoreOrderBtn = styled.button`
  width: var(--width-variable);
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-top: 1px solid #f2f4f6;
  background-color: white;
  padding: 0;
  color: #3182f6;
  font-size: 17px;
  font-weight: 600;
  > p {
    margin-right: 5px;
  }
`;
export { OrderItemWrapper, OrderPayWrapper, OrderStore, MoreOrderBtn };
