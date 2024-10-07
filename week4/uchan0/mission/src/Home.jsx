import React from "react";
import ImageCollection from "./ImageCollection";
import "./styles.css";
import "./reset.css";
import marketModel from "./models/MarketModel";

const Header = () => {
  return (
    <header className="main-header">
      <button type="button" className="location__container">
        <div className="location__container--text">군자동</div>
        <ImageCollection imgName={"down-chevron.svg"} />
      </button>
      <div className="header__icon-container">
        <button type="button">
          <ImageCollection imgName={"search.svg"} />
        </button>
        <button type="button">
          <ImageCollection imgName={"hamburger.svg"} />
        </button>
        <button type="button">
          <ImageCollection imgName={"bell.svg"} />
        </button>
      </div>
    </header>
  );
};

const Content = () => {
  return (
    <div>
      <article className="post">
        {marketModel.items.map((item, index) => (
          <section key={index} className="post__container">
            <div className="product__container">
              <ImageCollection imgName={item.image} />
              <div className="product__info">
                <span className="product__name">{item.title}</span>
                <div className="product__upload--info">
                  <span className="location--clickable">{item.location}</span>
                  <span className="product__info--normaltext">·</span>
                  <span className="product__info--normaltext">
                    {item.timeAgo}
                  </span>
                </div>
                <span className="product__price">{item.price}</span>
              </div>
            </div>
            <div className="interest__container">
              {item.comments > 0 && (
                <>
                  <ImageCollection imgName={"smallChat.svg"} />
                  <span className="product__info--normaltext">
                    {item.comments}
                  </span>
                </>
              )}
              {item.likes > 0 && (
                <>
                  <ImageCollection imgName={"heart.svg"} />
                  <span className="product__info--normaltext">
                    {item.likes}
                  </span>
                </>
              )}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
};

const PlusButton = () => {
  return (
    <button className="plus-button" type="button">
      <ImageCollection imgName={"plus.svg"} />
    </button>
  );
};

const BottomNav = () => {
  return (
    <div>
      <nav className="bottom-bar">
        <button type="button">
          <ImageCollection imgName={"home.svg"} />
          <div className="bar__text">홈</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"life.svg"} />
          <div className="bar__text">동네생활</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"nearby.svg"} />
          <div className="bar__text">내 근처</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"chat.svg"} />
          <div className="bar__text">채팅</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"mydaangn.svg"} />
          <div className="bar__text">나의 당근</div>
        </button>
      </nav>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <PlusButton />
      <BottomNav />
    </div>
  );
};

export default Home;
