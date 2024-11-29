import styled from 'styled-components';

const OrderBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 110px;
  box-shadow: 0px -8px 16px 0px #0000001A;
  align-items: center;

> img {
    position: fixed;
    bottom: 0;
    width: 134px;
    height: 5px;
    margin-top: 21px;
    margin-bottom: 8px;
  }
`;

const OrderWrapper = styled.div`
  width: 100%;  
  height: 77px;
  display: flex;
  justify-content: space-between;

> Button {
    // width: 84px;
    // height: 38px;
    margin-top: 19px;
    margin-right: 24px;
    border-radius: 8px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  item-align: center;

> .totalPriceText {
    width: 69px;
    height: 18px;
    margin-top: 16px;
    margin-left: 24px;
    margin-bottom: 5px;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.9px;
    text-align: center;
    color: #6B7684;
}

> .totalPriceNumber {
    width: 66px;
    height: 20px;
    margin-left: 24px;
    margin-bottom: 18px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    text-align: center;
    color: #4E5968;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 19px;
  margin-right: 24px;
`;
export {OrderBarWrapper, OrderWrapper, PriceWrapper, ButtonWrapper};