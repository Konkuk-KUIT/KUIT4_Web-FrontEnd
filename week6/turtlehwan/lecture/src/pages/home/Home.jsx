import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <h1>homehome</h1>
      <Link to="/page">page로 가는 Link 입니다</Link>
      <Link to="/page/sdfsd">page/pageId 로 가는 Link 입니다</Link>
      <p></p>
      <a href="/page">page</a>
    </div>
  );
};

export default Home;
