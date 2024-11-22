import Button from "../Button";
import OrderConfirmWrapper from './OrderConfirmation.styles';
import HomeIndicator from '../../assets/home-indicator.svg';

const OrderConfirmation = () => {
  return (
    <OrderConfirmWrapper>
      <div>최소 주문금액 13,000원</div>
      <Button type="button" size="xl" disabled={true}>12,600원 결제하기</Button>
      <img src={HomeIndicator} alt="home-indicator" />
    </OrderConfirmWrapper>
  );
};
export default OrderConfirmation;