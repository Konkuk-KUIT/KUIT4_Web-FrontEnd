import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import PlusBtn from "./components/PlusBtn";
import marketModel from "./models/MarketModel";


const Home = () => {
  return <div>
    <Header/>
    <Content/>
    <PlusBtn/>
    <BottomNav/>

  </div>;
};

export default Home;
