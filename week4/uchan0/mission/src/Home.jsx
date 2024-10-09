import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import PlusButton from "./components/PlustButton";
import BottomNav from "./components/BottomNav";
import marketModel from "./models/MarketModel";
import "./styles.css";
import "./reset.css";

const Home = () => {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <PlusButton />
      <BottomNav />
    </div>
  );
};

export default Home;
