import React from "react";

import "./styles/Header.css";
import "./styles/Content.css";
import "./styles/BottomNav.css";

import DownChervon from "./assets/down-chervon.svg";
import Search from "./assets/search.svg";
import Menu from "./assets/menu.svg";
import Notification from "./assets/notification.svg";

import Production1 from "./assets/production1.svg";
import Production2 from "./assets/production2.svg";
import Production3 from "./assets/production3.svg";
import Production4 from "./assets/production4.svg";
import Production5 from "./assets/production5.svg";
import Chat from "./assets/chat.svg";
import Heart from "./assets/heart.svg";

import Plus from "./assets/plus.svg";
import BottomHome from "./assets/bottom-bar_home.svg";
import BottomNews from "./assets/bottom-bar_news.svg";
import BottomRocation from "./assets/bottom-bar_location.svg";
import BottomChat from "./assets/bottom-bar_chat.svg";
import BottomMypage from "./assets/bottom-bar_mypage.svg";

const Header = () => {
  return (
    <>
      <header>
        <div class="icon-container">
          <span>군자동</span>
          <button type="button">
            <img src={DownChervon} alt="지역 선택 버튼" />
          </button>
        </div>
        <div class="icon-container">
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Search}
              alt="검색 버튼"
            />
          </button>
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Menu}
              alt="메뉴 선택 버튼"
            />
          </button>
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Notification}
              alt="알림 버튼"
            />
          </button>
        </div>
      </header>
    </>
  );
};

const Content = () => {
  return (
    <>
      <section>
        <button className="item-container">
          <img src={Production1} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">에어팟 프로</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>3일 전</span>
              </div>
              <span className="item__price">220,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Chat} alt="댓글 개수 표현 사진" />
                <span>3</span>
              </div>
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>11</span>
              </div>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production2} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">바이레도 블랑쉬 50ml</span>
              <div className="item__subdesc">
                <span>광진구 구의제3동</span>
                <span>·</span>
                <span>26초 전</span>
              </div>
              <span className="item__price">4,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>2</span>
              </div>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production3} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">샌드위치</span>
              <div className="item__subdesc">
                <span>동대문구 휘경동</span>
                <span>·</span>
                <span>끌올 59초 전</span>
              </div>
              <span className="item__price">8,000원</span>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production4} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">아이폰 13프로맥스</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>1일 전</span>
              </div>
              <span className="item__price">1,000,000원</span>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production5} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">에어팟 프로</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>3일 전</span>
              </div>
              <span className="item__price">220,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Chat} alt="댓글 개수 표현 사진" />
                <span>3</span>
              </div>
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>11</span>
              </div>
            </div>
          </div>
        </button>
      </section>
    </>
  );
};

const BottomNav = () => {
  return (
    <>
      <nav>
        <button class="add-btn">
          <img src={Plus} alt="판매 게시글 추가 버튼 이미지" />
        </button>
        <div class="bottom-bar">
          <button class="bottom-bar__container">
            <img src={BottomHome} alt="홈 페이지로 이동하는 버튼" />
            <span>홈</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomNews} alt="동네생활 페이지로 이동하는 버튼" />
            <span>동네생활</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomRocation} alt="내 근처 페이지로 이동하는 버튼" />
            <span>내 근처</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomChat} alt="채팅 페이지로 이동하는 버튼" />
            <span>채팅</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomMypage} alt="나의 당근페이지로 이동하는 버튼" />
            <span>나의 당근</span>
          </button>
        </div>
      </nav>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
};

export default Home;
