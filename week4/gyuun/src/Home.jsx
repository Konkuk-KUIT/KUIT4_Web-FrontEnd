// Home.jsx
import React from "react";
import "./components/index.css";
import Header from "./components/Header.jsx"; // MarketModel.js에서 데이터 가져오기
import Content from "./components/Content.jsx"; // MarketModel.js에서 데이터 가져오기
import BottomNav from "./components/BottomNav.jsx"; // MarketModel.js에서 데이터 가져오기
import marketModel from "./models/MarketModel";

// MarketModel.js에서 데이터 가져오기
//그림은 여기부터
// import blackboxImage from './assets/blackbox.svg';
// import signalImage from './assets/signal.svg';




const Home = () => {
  return (
    <div>
      <Header marketModel={marketModel}/>
      <Content marketModel={marketModel}/>
      <BottomNav marketModel={marketModel}/>
    </div>
  );
};

export default Home;
