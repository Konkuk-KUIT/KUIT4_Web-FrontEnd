import React from "react";
import DownChervorn from "./assets/down-chervorn.svg";
import Search from "./assets/search.svg";
import Menu from "./assets/menu.svg";
import Notification from "./assets/notification.svg";
import ChatMessageBlock from "./assets/chat-message_block.svg";
import Plus from "./assets/plus.svg";
import Home_2 from "./assets/home_2.svg";
import Ariticle from "./assets/article.svg";
import PlaceMarker from "./assets/place-marker.svg";
import ChatMessageTwo from "./assets/chat-message_two.svg";
import User from "./assets/user.svg";

import Heart from "./assets/heart.svg";
import "./styles/reset.css";
import "./styles/Header.css";
import "./styles/Content.css";
import "./styles/BottomNav.css";
const Header = () => {
  return (
    <>
      <nav class="header">
        <button class="header__location">
          <h1 class="location__name">군자동</h1>
          <img class="location__icon" src={DownChervorn} alt="지역 선택 버튼" />
        </button>

        <div class="header__icons">
          <button>
            <img src={Search} alt="검색 버튼" />
          </button>
          <button>
            <img src={Menu} alt="메뉴 버튼" />
          </button>
          <button>
            <img src={Notification} alt="알림 버튼" />
          </button>
        </div>
      </nav>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div class="product-list">
        <div class="product-item">
          <div class="product-item__image">
            <img src="http://placehold.co/110" alt="에어팟 프로" />
          </div>
          <div class="product-item__details">
            <h2 class="product-item__name">에어팟 프로</h2>
            <div class="product-item__location">군자동 · 3일 전</div>
            <span class="product-item__price">220,000원</span>

            <div class="product-item__meta">
              <div class="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span class="meta-text">3</span>
              </div>

              <div class="meta__wrap">
                <img src={Heart} alt="하트 이미지" class="meta_icon" />
                <span class="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="underline_1px"></div>

        <div class="product-item">
          <div class="product-item__image">
            <img src="http://placehold.co/110" alt="바이레도 블랑쉬 50ml" />
          </div>
          <div class="product-item__details">
            <h2 class="product-item__name">바이레도 블랑쉬 50ml</h2>
            <div class="product-item__location">광진구 구의제3동 · 26초 전</div>
            <span class="product-item__price">4,000원</span>

            <div class="product-item__meta">
              <div class="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span class="meta-text">3</span>
              </div>

              <div class="meta__wrap">
                <img src={Heart} alt="하트 이미지" class="meta_icon" />
                <span class="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="underline_1px"></div>

        <div class="product-item">
          <div class="product-item__image">
            <img src="http://placehold.co/110" alt="샌드위치" />
          </div>
          <div class="product-item__details">
            <h2 class="product-item__name">샌드위치</h2>
            <div class="product-item__location">
              동대문구 휘경동 · 끌올 59초 전
            </div>
            <span class="product-item__price">8,000원</span>

            <div class="product-item__meta">
              <div class="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span class="meta-text">3</span>
              </div>

              <div class="meta__wrap">
                <img src={Heart} alt="하트 이미지" class="meta_icon" />
                <span class="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="underline_1px"></div>

        <div class="product-item">
          <div class="product-item__image">
            <img src="http://placehold.co/110" alt="아이폰 13프로맥스" />
          </div>
          <div class="product-item__details">
            <h2 class="product-item__name">아이폰 13프로맥스</h2>
            <div class="product-item__location">군자동 · 1일 전</div>
            <span class="product-item__price">220,000원</span>

            <div class="product-item__meta">
              <div class="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span class="meta-text">3</span>
              </div>

              <div class="meta__wrap">
                <img src={Heart} alt="하트 이미지" class="meta_icon" />
                <span class="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="underline_1px"></div>

        <div class="product-item">
          <div class="product-item__image">
            <img src="http://placehold.co/110" alt="커피머신" />
          </div>
          <div class="product-item__details">
            <h2 class="product-item__name">커피머신</h2>
            <div class="product-item__location">군자동 · 1초 전</div>
            <span class="product-item__price">1,000,000원</span>

            <div class="product-item__meta">
              <div class="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span class="meta-text">3</span>
              </div>

              <div class="meta__wrap">
                <img src={Heart} alt="하트 이미지" class="meta_icon" />
                <span class="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div class="underline_1px"></div>
      </div>
    </>
  );
};

const BottomNav = () => {
  return (
    <>
      <nav class="bottom-bar">
        <button class="plus__btn">
          <img alt="홈버튼" src={Plus} />
        </button>
        <button class="bottom-bar__item">
          <img src={Home_2} alt="홈 버튼" class="bottom-bar__icon" />
          <span class="bottom-bar__text">홈</span>
        </button>
        <button class="bottom-bar__item">
          <img src={Ariticle} alt="동네 생활 버튼" class="bottom-bar__icon" />
          <span class="bottom-bar__text">동네생활</span>
        </button>
        <button class="bottom-bar__item">
          <img src={PlaceMarker} alt="내 근처 버튼" class="bottom-bar__icon" />
          <span class="bottom-bar__text">내 근처</span>
        </button>
        <button class="bottom-bar__item">
          <img src={ChatMessageTwo} alt="채팅 버튼" class="bottom-bar__icon" />
          <span class="bottom-bar__text">채팅</span>
        </button>
        <button class="bottom-bar__item">
          <img src={User} alt="나의 당근 버튼" class="bottom-bar__icon" />
          <span class="bottom-bar__text">나의 당근</span>
        </button>
      </nav>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <BottomNav />
    </>
  );
};

export default Home;
