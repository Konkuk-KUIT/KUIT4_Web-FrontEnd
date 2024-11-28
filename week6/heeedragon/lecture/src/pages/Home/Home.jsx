import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color : ${(props) => props.$bgcolor};
`; 

//link 사용법은 a 태그와 비슷 -> 새로고침이 안 일어남 , html안에서 페이지가 이동하는 것처럼 보이는...
const Home = () => {
    return (
        <div>
            Home
            <h1 className={styles.classclass}>homehome</h1>
            <h1 className="classclass">homehome</h1>
            <Link to="/page">page로 가는 link 입니다</Link>
            <br></br>
            <Link to="/page/sdfsd">page/pageId 로 가는 Link</Link>
            <br></br>
            <a href="/page">page</a>
            <StyledDiv $bgcolor={"skyblue"}>설명설명설명</StyledDiv>
        </div>
    )
}

export default Home;