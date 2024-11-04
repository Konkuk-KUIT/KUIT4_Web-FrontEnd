import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: aqua;
`;
const StyledDiv2 = styled.div`
  background-color: ${(props) => props.$bgcolor};
`;

const Home = () => {
  return (
    <div>
      Home
      <h1 className={styles.className}>homehome</h1>
      {/* a태그와 Link의 차이점 : Link는 새로고침을 안한다. */}
      <Link to="/page">page로 가는 Link입니다.</Link>
      <p></p>
      <a href="/page">a태그로</a>
      <StyledDiv>스타일링 된 div</StyledDiv>
      <StyledDiv2 $bgcolor={"skyblue"}>스타일링 된 div</StyledDiv2>
    </div>
  );
};

export default Home;
