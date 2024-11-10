import Button from "../Button";
import {OrderWrapper} from './Order.styles';

const Order = () => {
  return (
    <OrderWrapper>
      <div>최소 주문금액 13,000원</div>
      <Button type="button" size="xl" disabled={true}>12,600원 결제하기</Button>
    </OrderWrapper>
  );
};
export default Order;