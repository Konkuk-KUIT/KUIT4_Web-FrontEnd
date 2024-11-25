import {CartInfoWrapper, OrderInfo, TitleWrapper, PriceInfo, OrderPriceWrapper, DeliveryPriceWrapper, TotalPriceWrapper} from './CartInfo.styles';
import CartItem from '../CartItem/CartItem';
import warning from "../../assets/warning.svg";
import useCartStore from '../../store/cartStore';

const CartInfo = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const totalOrderPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const totalPrice = totalOrderPrice + store.deliveryFee;


  return (
    <CartInfoWrapper>
      <OrderInfo>
        <TitleWrapper>
          <div className='storeName'>{store.name}</div>
          <div className='priceAlert'>
            {(totalPrice<=store.minDeliveryPrice) && `최소금액 미달`}
          </div>
          {(totalPrice <= store.minDeliveryPrice) && (<img src={warning} alt="Warning" />)}
        </TitleWrapper>
        <CartItem />
        <div className='addMore'>더 담기 +</div>
      </OrderInfo>
      <PriceInfo>
        <OrderPriceWrapper>
          <div className='orderPriceTitle'>주문금액</div>
          <div className='orderPrice'>{totalOrderPrice}원</div>
        </OrderPriceWrapper>
        <DeliveryPriceWrapper>
          <div className='deliveryPriceTitle'>배달요금</div>
          <div className='deliveryPrice'>{store.deliveryFee}원</div>
        </DeliveryPriceWrapper>
        <TotalPriceWrapper>
          <div className='totalPriceTitle'>총 결제금액</div>
          <div className='totalPrice'>{totalPrice}원</div>
        </TotalPriceWrapper>
      </PriceInfo>
    </CartInfoWrapper>
  );
};
export default CartInfo;