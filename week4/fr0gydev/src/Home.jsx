import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import plus from './assets/plus.svg';

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
      <button className="floating-button">
        <img src={plus} alt="글쓰기 버튼" />
      </button>
    </div>
  );
};

export default Home;