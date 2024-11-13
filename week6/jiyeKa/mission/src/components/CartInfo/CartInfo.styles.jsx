import styled from 'styled-components';

const CartInfoWrapper = styled.div`
  position: relative;
  top: 41px;
  width: 390px;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 16px solid #F2F4F6;
  border-bottom: 16px solid #F2F4F6;
> .addMore {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    border-top: 1px solid #E4E7EB;
    color: #3182F6;
    text-align: center;
    padding-top: 19px;
    padding-bottom: 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-left: 24px;
  margin-right: 25px;
> .storeName {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 700;
    line-height: 20.29px;
    color: #6B7684;
  }
> .priceAlert {
    left: 0;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.9px;
    color: #F04452;
    margin-left: auto;
  }
> img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`;

const PriceInfo = styled.div`
`;

const OrderPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 23px;
> .orderPriceTitle {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #8B95A1;
  }
> .orderPrice {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #505967;
  }
`;

const DeliveryPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  margin-left: 24px;
  margin-right: 23px;
> .deliveryPriceTitle {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #8B95A1;
  }
> .deliveryPrice {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #505967;
  }
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-left: 24px;
  margin-right: 23px;
> .totalPriceTitle {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    color: #4E5968;
  }
> .totalPrice {
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20.29px;
    color: #4E5968;
  }
`;
export {CartInfoWrapper, OrderInfo, TitleWrapper, PriceInfo, OrderPriceWrapper, DeliveryPriceWrapper, TotalPriceWrapper};