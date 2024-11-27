import React from 'react'
import StyledDiv from './OrderList.Styles'
import Item from '../Item/Item'
import MarkIcon from '../../assets/mark.svg'
import useCartStore from '../../store/cartStore';

const OrderList = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  // 메뉴들의 가격 총합 계산
  const totalPrice = menus.reduce((acc, menu) => acc + menu.price, 0);

  return (
    <StyledDiv>
      {store && (
        <div className="storeName">
            <p className='left'>{store.name}</p>
            {totalPrice < store.minDeliveryPrice && (
              <>
            <p className='right'>최소금액 미달</p>
            <img src={ MarkIcon } alt="mark" />
              </>
          )}
            
        </div>
         )}
        {menus.map((menu, index) => (
        <Item key={index} menu={menu} />
      ))}
    </StyledDiv>
  )
}

export default OrderList