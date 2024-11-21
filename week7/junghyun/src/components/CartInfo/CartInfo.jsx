import {CartInfoWrapper, OrderInfo, TitleWrapper, PriceInfo, OrderPriceWrapper, DeliveryPriceWrapper, TotalPriceWrapper} from './CartInfo.styles';
import CartItem from '../CartItem/CartItem';
import Warning from "../../assets/warning.svg";
import useCartStore from "../../store/cartStore";
import {useNavigate} from 'react-router-dom';

const CartInfo = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const currentPrice = menus.reduce((acc, menu) => acc+menu.price, 0);

  const navigate = useNavigate();
  const addMoreHandler = () => {
    navigate(`/store/${store.id}`);
  };
  
  return (
    <CartInfoWrapper>
      <OrderInfo>
        <TitleWrapper>
          <div className='storeName'>{store.name}</div>
          {(currentPrice < store.minDeliveryPrice) && <div className='priceAlert'>최소금액 미달</div>}
          {(currentPrice < store.minDeliveryPrice) && <img src={Warning} alt="warning" />}
        </TitleWrapper>
        <CartItem />
        <button className='addMore' onClick={addMoreHandler}>더 담기 +</button>
      </OrderInfo>
      <PriceInfo>
        <OrderPriceWrapper>
          <div className='orderPriceTitle'>주문금액</div>
          <div className='orderPrice'>{currentPrice.toLocaleString('ko-KR')}원</div>
        </OrderPriceWrapper>
        <DeliveryPriceWrapper>
          <div className='deliveryPriceTitle'>배달요금</div>
          <div className='deliveryPrice'>{store.deliveryFee.toLocaleString('ko-KR')}원</div>
        </DeliveryPriceWrapper>
        <TotalPriceWrapper>
          <div className='totalPriceTitle'>총 결제금액</div>
          <div className='totalPrice'>{(currentPrice+store.deliveryFee).toLocaleString('ko-KR')}원</div>
        </TotalPriceWrapper>
      </PriceInfo>
    </CartInfoWrapper>
  );
};
export default CartInfo;