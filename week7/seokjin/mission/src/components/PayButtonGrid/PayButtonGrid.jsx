import React from 'react'
import StyledDiv from './PayButtonGrid.styles'
import Button from '../Button'
import useCartStore from '../../store/cartStore';

const PayButtonGrid = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const totalPriceWithDelivery = totalPrice + (store ? store.deliveryFee : 0);
  // 최소 주문 금액 미달 여부
  const isBelowMinPrice = totalPrice < store.minDeliveryPrice;

  return (
    <StyledDiv>
        <p>최소 주문금액 {store.minDeliveryPrice}원</p>
        <Button size='xl' disabled={isBelowMinPrice}>{totalPriceWithDelivery}원 결제하기</Button>
    </StyledDiv>
  )
}

export default PayButtonGrid  