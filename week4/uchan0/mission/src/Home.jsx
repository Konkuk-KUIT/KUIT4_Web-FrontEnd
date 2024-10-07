import React from "react";
import ImageCollection from "./ImageCollection";
import "./styles.css";

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
        <section className="post__container">
          <div className="product__container">
            <ImageCollection imgName={"airpod.svg"} />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <ImageCollection imgName={"product2.svg"} />
            <div className="product__info">
              <span className="product__name">바이레도 블랑쉬 50ml</span>
              <div className="product__upload--info">
                <span className="location--clickable">광진구 구의제3동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">26초 전</span>
              </div>
              <span className="product__price">4,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">2</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <ImageCollection imgName={"sandwich.svg"} />
            <div className="product__info">
              <span className="product__name">샌드위치</span>
              <div className="product__upload--info">
                <span className="location--clickable">동대문구 휘경동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">끌올 59초 전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <ImageCollection imgName={"iphone13.svg"} />
            <div className="product__info">
              <span className="product__name">아이폰 13프로맥스</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">1일전</span>
              </div>
              <span className="product__price">1,000,000원</span>
            </div>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <ImageCollection imgName={"coffeemachine.svg"} />
            <div className="product__info">
              <span className="product__name">커피머신</span>
              <div className="product__upload--info">
                <span className="location--clickable">구리시 교문1동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">1초 전</span>
              </div>
              <span className="product__price">100,000원</span>
            </div>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <img
              src="http://placehold.co/240"
              alt="product image"
              className="product__img"
            />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <img
              src="http://placehold.co/240"
              alt="product image"
              className="product__img"
            />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <img
              src="http://placehold.co/240"
              alt="product image"
              className="product__img"
            />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <img
              src="http://placehold.co/240"
              alt="product image"
              className="product__img"
            />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
        <section className="post__container">
          <div className="product__container">
            <img
              src="http://placehold.co/240"
              alt="product image"
              className="product__img"
            />
            <div className="product__info">
              <span className="product__name">에어팟 프로</span>
              <div className="product__upload--info">
                <span className="location--clickable">군자동</span>
                <span className="product__info--normaltext">·</span>
                <span className="product__info--normaltext">3일전</span>
              </div>
              <span className="product__price">220,000원</span>
            </div>
          </div>
          <div className="interest__container">
            <ImageCollection imgName={"smallChat.svg"} />
            <span className="product__info--normaltext">3</span>
            <ImageCollection imgName={"heart.svg"} />
            <span className="product__info--normaltext">11</span>
          </div>
        </section>
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
