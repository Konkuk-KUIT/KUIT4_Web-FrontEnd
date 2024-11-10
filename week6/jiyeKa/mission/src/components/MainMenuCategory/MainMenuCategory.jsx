import React from 'react'
import { Category, CategoryGrid, CategoryTextStyle } from './MainMenuCategory.styles'
import pizza from "../../assets/pizza.svg"

// 홈 화면의 음식 카테고리

const MainMenuCategory = () => {
  return (
    <CategoryGrid>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>

    </CategoryGrid>
  )
}

export default MainMenuCategory