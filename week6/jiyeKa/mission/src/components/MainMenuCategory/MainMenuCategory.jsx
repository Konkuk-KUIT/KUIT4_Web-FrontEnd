import React from 'react'
import { Category, CategoryGrid, CategoryTextStyle, CategoryComponent } from './MainMenuCategory.styles'
import pizza from "../../assets/pizza.svg"
import salad from "../../assets/salad.svg"
import hamburger from "../../assets/hamburger.svg"
import koreanFood from "../../assets/koreanFood.svg"
import snack from "../../assets/snack.svg"
import chicken from "../../assets/chicken.svg"
import sushi from "../../assets/sushi.svg"
import sandwich from "../../assets/sandwich.svg"
import pasta from "../../assets/pasta.svg"
import dessert from "../../assets/dessert.svg"
import coffee from "../../assets/coffee.svg"
import etc from "../../assets/etc.svg"

// 홈 화면의 음식 카테고리 3*4

const MainMenuCategory = () => {
  return (

    

    <CategoryComponent>

    <CategoryGrid>
      <Category>
        <img src={pizza} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>피자</CategoryTextStyle>
      </Category>
      <Category>
        <img src={salad} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>샐러드</CategoryTextStyle>
      </Category>
      <Category>
        <img src={hamburger} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>햄버거</CategoryTextStyle>
      </Category>
      <Category>
        <img src={koreanFood} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>한식</CategoryTextStyle>
      </Category>
      <Category>
        <img src={snack} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>분식</CategoryTextStyle>
      </Category>
      <Category>
        <img src={chicken} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>치킨</CategoryTextStyle>
      </Category>
      <Category>
        <img src={sushi} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>초밥</CategoryTextStyle>
      </Category>
      <Category>
        <img src={sandwich} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>샌드위치</CategoryTextStyle>
      </Category>
      <Category>
        <img src={pasta} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>파스타</CategoryTextStyle>
      </Category>
      <Category>
        <img src={dessert} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>디저트</CategoryTextStyle>
      </Category>
      <Category>
        <img src={coffee} style={{width:"28px", height:"28px"}}/>
        <CategoryTextStyle>커피</CategoryTextStyle>
      </Category>
      <Category>
        <img src={etc} style={{width:"21px", height:"5px"}}/>
        <CategoryTextStyle>더보기</CategoryTextStyle>
      </Category>

    </CategoryGrid>
    </CategoryComponent>
  )
}

export default MainMenuCategory