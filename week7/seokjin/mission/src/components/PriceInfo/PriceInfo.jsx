import React from 'react'
import StyledDiv from './PriceInfo.styles'
import useCartStore from '../../store/cartStore';

const PriceInfo = () => {
    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);

    // 주문 금액 합계 계산
    const totalMenuPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
    const deliveryFee = store ? store.deliveryFee : 0;
    const totalPrice = totalMenuPrice + deliveryFee;

    return (
    <StyledDiv>
        <div className='whilte-space'></div>
            <div className='board'>
            <p className='left-text'>주문금액</p>
            <p className='right-text'>{totalMenuPrice}원</p>
        </div>
            <div className='board'>
            <p className='left-text'>배달요금</p>
            <p className='right-text'>{deliveryFee}원</p>
        </div>
        <div>
            <div className='total-container'>
                <p className='left-text' style={{color:"#4E5968"}}>총 결제금액</p>
                <p className='right-text' style={{color:"#4E5968"}}>{totalPrice}원</p>
            </div>
        </div>
    </StyledDiv>
  )
}

export default PriceInfo