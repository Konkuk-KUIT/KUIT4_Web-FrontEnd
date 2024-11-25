import React from 'react'
import StyledDiv from './OrderList.Styles'
import Item from '../Item/Item'
import MarkIcon from '../../assets/mark.svg'

const OrderList = () => {
  return (
    <StyledDiv>
        <div className="storeName">
            <p className='left'>샐로리 한남점</p>
            <p className='right'>최소금액 미달</p>
            <img src={ MarkIcon } alt="mark" />
        </div>
        <Item />
    </StyledDiv>
  )
}

export default OrderList