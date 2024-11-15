import { createStore } from "zustand";
import Button from "../Button";
import {OrderWrapper} from './Order.styles';
import useCartStore from "../../store/cartStore";

const Order = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);

  const totalOrderPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const totalPrice = totalOrderPrice + store.deliveryFee;
  
  return (
    <OrderWrapper>
      <div>최소 주문금액 {store.minDeliveryPrice}원</div>
      {(store.minDeliveryPrice<=totalPrice) && <Button type="button" size="xl" disabled={false}>{totalPrice}원 결제하기</Button>}
      {!(store.minDeliveryPrice<=totalPrice) && <Button type="button" size="xl" disabled={true}>{totalPrice}원 결제하기</Button>}

    </OrderWrapper>
  );
};
export default Order;