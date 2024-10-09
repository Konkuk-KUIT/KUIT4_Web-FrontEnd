import React from "react";
import "./reset.css";
import "./index.css";
import marketModel from "./MarketModel"; // 경로가 올바른지 확인
import navItems from "./BottomModel";
const Header = () => {
  return (
    <header className="header">
      <span className="location">군자동 ▼</span>
      <div className="icons">
        <img src="./assets/right-chevron.svg" alt="Search" className="icon" />
      </div>
    </header>
  );
};

const ItemInfo = ({item}) => {
  return (
    <div className="item-info">
      <h2>{item.title}</h2>
      <p>{item.location} · {item.date}</p>
      <span className="price">{item.price}</span>
      <div className="item-interest">
        <div className="item-cheat">
          <img src="./assets/chat.svg" alt="내 근처" />
        </div>
        <span className="item-meta">{item.chatCount}</span>
        <div className="item-cheat">
          <img src="./assets/heart.svg" alt="내 근처" />
        </div>
        <span class="item-meta">{item.heartCount}</span>
      </div>
    </div>
  );
};

const Item = () => {
    return (
      <div>
        {marketModel.map((item) => (
          <div className="item" key={item.id}> {/* key를 여기서 설정 */}
            <img src={item.image} alt={item.title} />
            <ItemInfo item={item} /> {/* item을 props로 전달 */}
          </div>
        ))}
      </div>
    );
  };

const Content = () => {
  return <Item />;
};

const BottomComponent = ({ navItems }) => { // 비구조화 할당
    return (
      <div className="nav-item" key={navItems.id}>
        <img src={navItems.image} alt={navItems.alt} />
        <span>{navItems.label}</span>
      </div>
    );
  };
  
  const BottomNav = () => {
    return (
        navItems.map((navItem) => (
          <BottomComponent navItems={navItem} key={navItem.id} /> // 여기에서 key 설정
        ))
    );
  };
  

const Home = () => {
    console.log(marketModel);
  return (
    <div className="container">
      <Header />
      <section className="item-list">
        <Content />
      </section>
      <nav className="bottom-nav">
        <BottomNav />
      </nav>
    </div>
  );
};

export default Home;
