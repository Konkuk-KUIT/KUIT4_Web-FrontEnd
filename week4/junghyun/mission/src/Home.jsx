import React from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import BottomNav from "./components/BottomNav.jsx";
import FloatingButton from "./components/FloatingButton.jsx";

import "./reset.css";
import "./index.css";

import marketModel from "./models/MarketModel.js";

const Home = () => {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
      <FloatingButton />
    </div>
  );
};

export default Home;
