import React from 'react'
import { StoreInfoStyles } from './StoreInfo.styles'
import PlaceHolderIcon from '../../assets/placeholder.svg'
import StarIcon from '../../assets/star.svg'

const StoreInfo = ({name, rate, reviewCnt, minDeliveryTime, maxDeliveryTime, deliveryFee}) => {
  return (
    <StoreInfoStyles>
        <div className='img-container'>
            <img src={PlaceHolderIcon} alt="placeholder" width={54} height={54}/>
        </div>
        <div className='text-container'>
            <p className='store-name'>{name}</p>
            <div className='rate-container'>
                <img src={StarIcon} alt="starIcon" />
                <p className='rate'>{rate}</p>
                <p className='reviewCnt'>&nbsp;({reviewCnt})</p>
            </div>
            <p className='delivery-info'>{minDeliveryTime}분~{maxDeliveryTime}분·배달비 {deliveryFee}원</p>
        </div>
    </StoreInfoStyles>
  )
}

export default StoreInfo