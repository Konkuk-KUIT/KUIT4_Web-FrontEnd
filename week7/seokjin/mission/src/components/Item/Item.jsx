import React from 'react'
import StyledDiv from './Item.styles'
import SmallArrowIcon from '../../assets/smallarrow.svg'
import PlaceHolder from '../../assets/placeholder.svg'

const Item = ( { menu } ) => {
  return (
    <StyledDiv>
        <div className='img-container'>
            <img src={ PlaceHolder } alt="placeholder" />
        </div>
        <div className='text-container'>
            <p className='menuName'>{menu.name}</p>
            <div className='detail-container'>
                <p className='detail'>{menu.ingredients}</p>
                <p className='menuCnt'>1개</p>
                <img src={SmallArrowIcon} alt="arrowIcon" />
            </div>
            <p className='fee'>{(menu.price).toLocaleString()}원</p>
        </div>
    </StyledDiv>
  )
}

export default Item