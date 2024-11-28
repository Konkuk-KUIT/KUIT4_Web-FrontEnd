import React from 'react'
import StyledDiv from './Item.styles'
import SmallArrowIcon from '../../assets/smallarrow.svg'
import PlaceHolder from '../../assets/placeholder.svg'

const Item = () => {
  return (
    <StyledDiv>
        <div className='img-container'>
            <img src={ PlaceHolder } alt="placeholder" />
        </div>
        <div className='text-container'>
            <p className='menuName'>토마토 샐러드</p>
            <div className='detail-container'>
                <p className='detail'>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
                <p className='menuCnt'>1개</p>
                <img src={SmallArrowIcon} alt="arrowIcon" />
            </div>
            <p className='fee'>10,600원</p>
        </div>
    </StyledDiv>
  )
}

export default Item