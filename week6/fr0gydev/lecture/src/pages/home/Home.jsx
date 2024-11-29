import { Link } from "react-router-dom";
import s from "./Home.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.$bgcolor};
`;

const Home = () => {
  return (
    <div>
      Home
      <h1 className={s.classclass}>homehome</h1>
      <h1 className="classclass">homehome</h1>
      <Link to="/page">page로 가는 Link 입니다</Link>
      <br />
      <Link to="/page/sdfsd">page/pageId 로 가는 Link 입니다</Link>
      <br />
      <a href="/page">page</a>
      <StyledDiv $bgcolor={"skyblue"}>설명설명설명</StyledDiv>
    </div>
  );
};

export default Home;
