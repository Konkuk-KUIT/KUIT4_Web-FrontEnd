import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import styled from 'styled-components'

const StyledDiv = styled.div` // styled.까지 입력하면 사용 가능한 기본 태그 제공
    background-color: aqua;
    color: ${(props) => props.$color};
`

const Home = () => {
  return (
    <div>
      Home
      <h1 className={styles.classclass}>homehome</h1>
      <Link to="/page">page로 이동하는 Link입니다</Link>
      {/* a태그가 아니므로(a태그는 새로운 Html을 받아옴) 새로고침이 발생하지 않음 */}
      <StyledDiv $color="blue">설명설명</StyledDiv>
    </div>
  )
}

export default Home
