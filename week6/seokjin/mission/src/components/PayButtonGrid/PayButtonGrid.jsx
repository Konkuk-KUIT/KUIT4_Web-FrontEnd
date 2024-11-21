import React from 'react'
import StyledDiv from './PayButtonGrid.styles'
import Button from '../Button'

const PayButtonGrid = () => {
  return (
    <StyledDiv>
        <p>최소 주문금액 13,000원</p>
        <Button size='xl'>12,600원 결제하기</Button>
    </StyledDiv>
  )
}

export default PayButtonGrid