import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const Home = () => {
  return (
    <div className="contents">
        <Header />
        <Content />
        <BottomNav />
    </div>
  );
};

export default Home;
