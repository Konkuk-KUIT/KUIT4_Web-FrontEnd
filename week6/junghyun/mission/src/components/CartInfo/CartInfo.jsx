import {CartInfoWrapper, OrderInfo, TitleWrapper, PriceInfo, OrderPriceWrapper, DeliveryPriceWrapper, TotalPriceWrapper} from './CartInfo.styles';
import CartItem from '../CartItem/CartItem';
import Warning from "../../assets/warning.svg";

const CartInfo = () => {
  return (
    <CartInfoWrapper>
      <OrderInfo>
        <TitleWrapper>
          <div className='storeName'>샐로리 한남점</div>
          <div className='priceAlert'>최소금액 미달</div>
          <img src={Warning} alt="warning" />
        </TitleWrapper>
        <CartItem />
        <div className='addMore'>더 담기 +</div>
      </OrderInfo>
      <PriceInfo>
        <OrderPriceWrapper>
          <div className='orderPriceTitle'>주문금액</div>
          <div className='orderPrice'>10,600원</div>
        </OrderPriceWrapper>
        <DeliveryPriceWrapper>
          <div className='deliveryPriceTitle'>배달요금</div>
          <div className='deliveryPrice'>2,000원</div>
        </DeliveryPriceWrapper>
        <TotalPriceWrapper>
          <div className='totalPriceTitle'>총 결제금액</div>
          <div className='totalPrice'>12,600원</div>
        </TotalPriceWrapper>
      </PriceInfo>
    </CartInfoWrapper>
  );
};
export default CartInfo;