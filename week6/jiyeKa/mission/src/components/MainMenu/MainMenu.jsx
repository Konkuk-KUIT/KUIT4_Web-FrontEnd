import React from 'react'
import { Title, Address, MainText } from './MainMenu.styles'

// 홈 화면의 상단 화면
const char = ">";
const MainMenu = () => {
  return (

    <Title>
        <MainText>오늘은 무엇을 먹을까요?</MainText>
        <Address>한남중앙로 40길 (한남 빌리지)(으)로 배달 {char}</Address>
    </Title>
  )
}

export default MainMenu