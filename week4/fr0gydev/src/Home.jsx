import React from "react";
import downArrow from './assets/down-arrow.svg';
import search from './assets/search.svg';
import menu from './assets/menu.svg';
import bell from './assets/bell.svg';
import airpodsPro from './assets/airpodspro.svg';
import chat from './assets/chat.svg';
import heart from './assets/heart.svg';
import byredo from './assets/바이레도.svg';
import sandwich from './assets/샌드위치.svg';
import iphone from './assets/iphone13promax.svg';
import nintendo from './assets/nintendo.svg';
import home from './assets/home.svg';
import news from './assets/news.svg';
import location from './assets/location.svg';
import message from './assets/message.svg';
import user from './assets/user.svg';
import plus from './assets/plus.svg';

const Header = () => {
  return (
    <header className="fixed-header">
      <div className="location-selector">
        <span className="location-name">군자동</span>
        <button className="down-arrow-btn">
          <img src={downArrow} alt="위치 선택" />
        </button>
      </div>
      <div className="header-icons">
        <button className="search-btn">
          <img src={search} alt="검색" />
        </button>
        <button className="menu-btn">
          <img src={menu} alt="메뉴" />
        </button>
        <button className="bell-btn">
          <img src={bell} alt="알림" />
        </button>
      </div>
    </header>
  );
};

const Content = () => {
  return (
    <main className="product-list">
      <div className="product-item">
        <img src={airpodsPro} alt="에어팟 프로" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">에어팟 프로</h2>
          <p className="product-meta">군자동 · 3일 전</p>
          <p className="product-price">220,000원</p>
          <div className="product-reactions">
            <span className="comment-count">
              <img src={chat} alt="채팅 개수" /> 3
            </span>
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 11
            </span>
          </div>
        </div>
      </div>
      <div className="product-item">
        <img src={byredo} alt="바이레도 블랑쉬 50ml" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">바이레도 블랑쉬 50ml</h2>
          <p className="product-meta">광진구 구의제3동 · 26초 전</p>
          <p className="product-price">4,000원</p>
          <div className="product-reactions">
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 2
            </span>
          </div>
        </div>
      </div>

      <div className="product-item">
        <img src={sandwich} alt="샌드위치" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">샌드위치</h2>
          <p className="product-meta">동대문구 휘경동 · 끌올 59초 전</p>
          <p className="product-price">8,000원</p>
        </div>
      </div>

      <div className="product-item">
        <img src={iphone} alt="아이폰 13프로맥스" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">아이폰 13프로맥스</h2>
          <p className="product-meta">군자동 · 1일 전</p>
          <p className="product-price">1,000,000원</p>
        </div>
      </div>

      <div className="product-item">
        <img src={nintendo} alt="닌텐도 스위치" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">닌텐도 스위치</h2>
          <p className="product-meta">구리시 교문1동 · 1초 전</p>
          <p className="product-price">120,000원</p>
          <div className="product-reactions">
            <span className="comment-count">
              <img src={chat} alt="채팅 개수" /> 1
            </span>
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 15
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

const BottomNav = () => {
  return (
    <footer className="fixed-footer">
      <button className="footer-btn">
        <img src={home} alt="홈 버튼" />
        <span>홈</span>
      </button>
      <button className="footer-btn">
        <img src={news} alt="동네생활 버튼" />
        <span>동네생활</span>
      </button>
      <button className="footer-btn">
        <img src={location} alt="내 근처 버튼" />
        <span>내 근처</span>
      </button>
      <button className="footer-btn">
        <img src={message} alt="채팅 버튼" />
        <span>채팅</span>
      </button>
      <button className="footer-btn">
        <img src={user} alt="나의 당근 버튼" />
        <span>나의 당근</span>
      </button>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
      <button className="floating-button">
        <img src={plus} alt="글쓰기 버튼" />
      </button>
    </div>
  );
};

export default Home;