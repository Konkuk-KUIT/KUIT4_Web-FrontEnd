import React from 'react'
import StyledDiv from './PriceInfo.styles'

const PriceInfo = () => {
  return (
    <StyledDiv>
        <div className='whilte-space'></div>
            <div className='board'>
            <p className='left-text'>주문금액</p>
            <p className='right-text'>10,600원</p>
        </div>
            <div className='board'>
            <p className='left-text'>배달요금</p>
            <p className='right-text'>2,000원</p>
        </div>
        <div>
            <div className='total-container'>
                <p className='left-text' style={{color:"#4E5968"}}>총 결제금액</p>
                <p className='right-text' style={{color:"#4E5968"}}>12,600원</p>
            </div>
        </div>
    </StyledDiv>
  )
}

export default PriceInfo