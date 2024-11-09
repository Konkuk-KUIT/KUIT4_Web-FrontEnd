import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css';
import styled from "styled-components"

const StyledDiv = styled.div`
  background-color: ${(props)=> props.$bgcolor};
`;

const Home = () => {
  return (
    <div>
      Home
      <h1 className={styles.homeDesign}>homehome</h1>
      <Link to="/page">page로 가는 Link입니다.</Link>
      {/** <a href="/page">page</a> -> 새로고침이 발생*/}
      <Link to="/page/pageId">page/pageID로 가는 Link입니다.</Link>
      <StyledDiv $bgcolor={"skyblue"}>스타일드 컴포넌트</StyledDiv>
      </div>
      
  )
}

export default Home