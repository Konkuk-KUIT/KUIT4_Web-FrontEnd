import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/Bottom";

import "./styles/reset.css";

import marketModel from "./models/MarketModel";

const Home = () => {
  return (
    <>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </>
  );
};

export default Home;
