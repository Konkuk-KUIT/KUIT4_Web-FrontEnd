import React from "react";

// import Components
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

// import data
import marketModel from "./models/MarketModel"; // Default import로 `marketModel` 가져오기
import navigationBar from "./models/NavigationBar";


// `Home` 컴포넌트에서 `marketModel`을 prop으로 받지 않고 바로 사용
const Home = () => {
  return (
    <div>
      {/* `marketModel`에서 `location`과 `items`를 prop으로 전달 */}
      <Header location={marketModel.location} />
      <Content products={marketModel.items} />
      <BottomNav navBarLists={navigationBar.items} />
    </div>
  );
};

export default Home;