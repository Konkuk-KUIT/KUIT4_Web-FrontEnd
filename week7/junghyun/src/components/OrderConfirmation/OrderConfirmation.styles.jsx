import styled from 'styled-components';

const OrderConfirmWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 153px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;

> div {
    margin-top: 24px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #6B7684;
  }

> Button {
    margin-top: 19px;
    margin-bottom: 21px;
  }

> img {
    position: fixed;
    bottom: 0;
    width: 134px;
    height: 5px;
    margin-bottom: 8px;
    margin-left: -239px;
  }
`;
export default OrderConfirmWrapper;