import React from "react";
import marketModel from "./models/MarketModel";
// Default import로 `marketModel` 가져오기
import navigationBar from "./models/NavigationBar";

const Header = ({ location }) => {
  // 비구조화 할당
  return (
    <div className="home-header" style={{ display: 'flex' }}>
      <div className="header-location">
        <button type="button">
          <span> {location} </span>
          <img src="./assets/chevron-down.png" alt="현재위치" />
          {/* assets 폴더를 public에 넣어야 상대경로로 접근 가능 */}
        </button>
      </div>
      <div className="header-buttons">
        <button type="button">
          <img src="./assets/magnifyingglass.png" alt="검색" />
        </button>
        <button type="button">
          <img src="./assets/line-3-horizontal.png" alt="메뉴" />
        </button>
        <button type="button">
          <img src="./assets/bell.png" alt="알림" />
        </button>
      </div>
    </div>
  );
};

const Content = ({ products }) => {
  return (
    <div className="content-product">
      {products.map((product, index) => (
        <button key={index} className="product-item" type="button" style={{ display: 'block' }}>
          <div className="product-image">
            <img src={`./assets/${product.image}`} alt={product.title} />
            {/* 백틱으로 템플릿 리터럴로 나타내 동적으로 src 경로 설정 */}
          </div>
          <div className="product-info">
            <span>{product.title + " "}</span>
            <span>{product.location + " "}</span>
            <span>{product.timeAgo + " "}</span>
            <span>{product.price + " "}</span>
            <span>{product.comments + " "}</span>
            <span>{product.likes + " "}</span>
            {product.isSold ? <span>판매됨</span> : <span>판매중</span>}
          </div>
        </button>
      ))}
    </div>
  );
};

const BottomNav = ({ navBarLists }) => {
  return (
    <div className="bottonNavigation">
      {navBarLists.map((navBarItem, index) => (
        <button key={index} className="nav-item" type="button">
          <img src={`./assets/${navBarItem.image}`} alt="navBarItem.type" />
          <div>{navBarItem.type}</div>
        </button>
      ))}
    </div>
  );
};

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