import React from 'react'
import { StyledDiv, StyledDivLast } from './InformationGroup.styles'
import { Review } from './InformationGroup.styles'
import StarIcon from '../../assets/star.svg'
const InformationGroup = ( { store } ) => {
  return (
    <>
    <Review>
        <img src={StarIcon} alt="star" />
        <p className='rate'>{store.rate}</p>
        <p className='reviewCnt'>리뷰 {store.reviewCnt}</p>
    </Review>
    <StyledDiv><p>결제방법 &nbsp; 토스결제만 현장결제 안됨</p></StyledDiv>
    <StyledDiv><p>최소주문 &nbsp; {store.minDeliveryPrice}원</p></StyledDiv>
    <StyledDivLast><p>배달시간 &nbsp; 약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</p></StyledDivLast>
    </>
  )
}

export default InformationGroup