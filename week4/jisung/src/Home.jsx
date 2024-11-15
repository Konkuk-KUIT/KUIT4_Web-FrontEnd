import React from "react";

// import Components
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

// import data
import marketModel from "./models/MarketModel"; // Default import로 `marketModel` 가져오기
import navigationBar from "./models/NavigationBar";

const Home = () => {
  return (
    <div>
      <Header location={marketModel.location} />
      <Content products={marketModel.items} />
      <BottomNav navBarLists={navigationBar.items} />
    </div>
  );
};

export default Home;