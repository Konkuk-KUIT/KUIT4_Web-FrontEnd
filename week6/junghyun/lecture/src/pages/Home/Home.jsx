import {Link} from 'react-router-dom';
import styles from './Home.module.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => props.$bgcolor};
`;

const Home = () => {
  return (
    <div>
      Home
      <h1 className={styles.h1}>homehome</h1>
      <h1 className="h1">homehome</h1>
      <Link to="/page">page로 가는 Link 1</Link> {/*a태그와 다르게 새로고침 안함*/}
      <br />
      <a href="/page">page로 가는 Link 2</a>
      <br />
      <Link to="/page/junghyun">page/pageId로 가는 Link</Link>
      <StyledDiv $bgcolor={"skyblue"}>asdf</StyledDiv>
    </div>
  );
};
export default Home