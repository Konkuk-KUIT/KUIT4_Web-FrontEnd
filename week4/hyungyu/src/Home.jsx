import React from "react";

import Header from "./components/header";
import Content from "./components/content";
import BottomNav from "./components/bottomNav";
import ButtonPlus from "./components/buttonPlus";

import marketModel from './models/MarketModel';

const Home = () => {
  return <div>

    <Header marketModel = {marketModel}/>

    <Content marketModel = {marketModel}/>

    <BottomNav />

    <ButtonPlus />

  </div>;
};

export default Home;
