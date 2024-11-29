import Button from "../Button";
import OrderConfirmWrapper from './OrderConfirmation.styles';
import HomeIndicator from '../../assets/home-indicator.svg';
import useCartStore from "../../store/cartStore";

const OrderConfirmation = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const currentPrice = menus.reduce((acc, menu) => acc+menu.price, 0);

  return (
    <OrderConfirmWrapper>
      <div>최소 주문금액 {store.minDeliveryPrice.toLocaleString('ko-KR')}원</div>
      <Button type="button" size="xl" disabled={(currentPrice < store.minDeliveryPrice)}>{(currentPrice+store.deliveryFee).toLocaleString('ko-KR')}원 결제하기</Button>
      <img src={HomeIndicator} alt="home-indicator" />
    </OrderConfirmWrapper>
  );
};
export default OrderConfirmation;