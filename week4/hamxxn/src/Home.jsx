import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/Bottom";

import "./styles/reset.css";

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <BottomNav />
    </>
  );
};

export default Home;
