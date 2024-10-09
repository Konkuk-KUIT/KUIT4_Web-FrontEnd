import React from "react";

import expandArrow from './assets/expandArrow.svg';
import search from './assets/search.svg';
import menu from './assets/menu.svg';
import notification from './assets/notification.svg';
import airpodsImg from './assets/airpodsImg.svg';
import heart from './assets/heart.svg';
import chat from './assets/chat.svg';
import blanche from './assets/blanche.svg';
import sandwich from './assets/sandwich.svg';
import iPhone13ProMax from './assets/iPhone13ProMax.svg';
import coffeeMachine from './assets/coffeeMachine.svg';
import home from './assets/home.svg';
import news from './assets/news.svg';
import placeMarker from './assets/placeMarker.svg';
import chatLarge from './assets/chatLarge.svg';
import user from './assets/user.svg';
import plus from './assets/plus.svg';

const Header = () => {
  return(
    <section class="top-header">
        <header>
            <div class="header-place">
                <span id="place">군자동</span>
                <button type="button">
                    <img src={expandArrow} alt="expandArrow"/>
                </button>
            </div>
            <div class="header-icon-container">
                <button type="button">
                    <img src={search} alt="expandArrow"/>
                </button>
                <button type="button">
                    <img src={menu} alt="expandArrow"/>
                </button>
                <button type="button">
                    <img src={notification} alt="expandArrow"/>
                </button>
            </div>
        </header>
     </section>
  );
};

const Content = () => {
  return(
    <article class="post">
        <section class="daangn-post">
          <img src={airpodsImg} alt="daangn-Img"/>
            <div class="post-info">
                <div class="post-item-info">
                    <span class="item-name">에어팟프로</span>
                    <span class="posting-place-date">군자동 • 3일전</span>
                    <span class="item-price">220,000원</span>
                </div>
                <div class="post-item-chat-heart">
                    <span>11</span>
                    <button type="button">
                        <img src={heart} class="heart-icon" alt="chat img"/>
                    </button>
                    <span>3</span>
                    <button type="button">
                        <img src={chat} class="chat-icon" alt="chat img"/>
                    </button>
                </div>
            </div>
        </section>
        <section class="daangn-post">
            <img src={blanche} alt="daangn-Img"/>
            <div class="post-info">
                <div class="post-item-info">
                    <span class="item-name">바이레도 블랑쉬 50ml</span>
                    <span class="posting-place-date">광진구 구의제3동 • 26초전</span>
                    <span class="item-price">4,000원</span>
                </div>
                <div class="post-item-chat-heart">
                    <span>2</span>
                    <button type="button">
                        <img src={heart} class="heart-icon" alt="chat img"/>
                    </button>
                </div>
            </div>
        </section>
        <section class="daangn-post">
            <img src={sandwich} alt="daangn-Img"/>
            <div class="post-info">
                <div class="post-item-info">
                    <span class="item-name">샌드위치</span>
                    <span class="posting-place-date">동대문구 휘경동 • 끌올 59초전</span>
                    <span class="item-price">8,000원</span>
                </div>
                <div class="post-item-chat-heart"></div>
            </div>
        </section>
        <section class="daangn-post">
            <img src={iPhone13ProMax} alt="daangn-Img"/>
            <div class="post-info">
                <div class="post-item-info">
                    <span class="item-name">아이폰 13프로맥스</span>
                    <span class="posting-place-date">군자동 • 1일전</span>
                    <span class="item-price">1,000,000원</span>
                </div>
                <div class="post-item-chat-heart"></div>
            </div>
        </section>
        <section class="daangn-post">
            <img src={coffeeMachine} alt="daangn-Img"/>
            <div class="post-info">
                <div class="post-item-info">
                    <span class="item-name">커피머신</span>
                    <span class="posting-place-date">구리시 교문1동 • 1초전</span>
                    <span class="item-price">100,000원</span>
                </div>
                <div class="post-item-chat-heart"></div>
            </div>
        </section>
     </article>
  );
};

const BottomNav = () => {
  return(
    <nav class="bottom-bar">
        <div class="bottom-bar-footer">
            <div class="bottom-bar-icons">
                <button type="button">
                    <img src={home} alt="home button"/>
                </button>
                <span>홈</span>
            </div>
            <div class="bottom-bar-icons">
                <button type="button">
                    <img src={news} alt="home button"/>
                </button>
                <span>동네생활</span>
            </div>
            <div class="bottom-bar-icons">
                <button type="button">
                    <img src={placeMarker} alt="home button"/>
                </button>
                <span>내 근처</span>
            </div>
            <div class="bottom-bar-icons">
                <button type="button">
                    <img src={chatLarge} alt="home button"/>
                </button>
                <span>채팅</span>
            </div>
            <div class="bottom-bar-icons">
                <button type="button">
                    <img src={user} alt="home button"/>
                </button>
                <span>나의 당근</span>
            </div>
        </div>
     </nav>
  );
};

const ButtonPlus = () => {
  return(
    <nav class="plus-button-circle">
        <button type="button">
            <img src={plus} alt="plus button"/>
        </button>
     </nav>
  );
}

const Home = () => {
  return <div>

    <Header />

    <Content />

    <BottomNav />

  </div>;
};

export default Home;
