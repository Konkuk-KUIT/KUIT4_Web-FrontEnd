import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import PlusButton from "./components/PlusButton";
import marketModel from "./models/MarketModels";

const Home = () => {
    return <div>

    <Header marketModel={marketModel}/>

    <Content marketModel={marketModel}/>

    <BottomNav />

    <PlusButton />

  </div>;
};

export default Home;
