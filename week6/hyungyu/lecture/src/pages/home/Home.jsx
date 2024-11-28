import { Link } from "react-router-dom"
import styles from './home.module.css';
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.$bgcolor};
  color: black;
`

const Home = () => {
  return (
    <div>
      Home
      <h1 className={styles.h1}>homehome</h1>
      <Link to="/page">page로 가는 링크</Link> {/*새로고침이 일어나지 않음. a태그는 새로고침 발생 */}
      <StyledDiv $bgcolor={"skyblue"}>설명설명</StyledDiv>
    </div>
  )
}

export default Home