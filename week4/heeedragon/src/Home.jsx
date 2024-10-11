import React from "react";

import downChevron from './assets/down-chevron.svg';
import searchIcon from './assets/search.svg';
import hamburgerIcon from './assets/hamburger.svg';
import notificationIcon from './assets/notification.svg';
import product1 from './assets/product1.svg';
import product2 from './assets/product2.svg';
import product3 from './assets/product3.svg';
import product4 from './assets/product4.svg';
import product5 from './assets/product5.svg';
import chatIcon from './assets/chat.svg';
import likeIcon from './assets/like.svg';
import bottomHomeIcon from './assets/bottom-home.svg';
import newsIcon from './assets/news.svg';
import localIcon from './assets/local.svg';
import bottomChatIcon from './assets/bottom-chat.svg';
import myIcon from './assets/my.svg';
import plusIcon from './assets/plus.svg';

const Header = () => {
    return (
        <div>
            <section className="post-header">
                <button type="button">
                    <div className="user-location">
                        <span>군자동</span>
                        <img src={downChevron} alt="location list" />
                    </div>
                </button>

                <div className="post-header__icon-container">
                    <img src={searchIcon} alt="검색" />
                    <img src={hamburgerIcon} alt="메뉴" />
                    <img src={notificationIcon} alt="알림" />
                </div>
            </section>
        </div>
    );
};

const Post = () => {
    return (
        <div className="post-container">
            <div className="post">
                <div>
                    <img className="product-img" src={product1} alt="product-img" />
                </div>
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">에어팟 프로</span>
                        <div className="product-desc">
                            <span>군자동</span>
                            <span>·</span>
                            <span>3일 전</span>
                        </div>
                        <span className="product__price">220,000원</span>
                    </div>
                    <div className="product-bottom">
                        <img src={chatIcon} alt="댓글" />
                        <span className="count">3</span>
                        <img src={likeIcon} alt="좋아요" />
                        <span className="count">11</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product2} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">바이레도 블랑쉬 50ml</span>
                        <div className="product-desc">
                            <span>광진구 구의제3동</span>
                            <span>·</span>
                            <span>26초 전</span>
                        </div>
                        <span className="product__price">4,000원</span>
                    </div>
                    <div className="product-bottom">
                        <img src={likeIcon} alt="좋아요" />
                        <span className="count">2</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product3} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">샌드위치</span>
                        <div className="product-desc">
                            <span>동대문구 휘경동</span>
                            <span>·</span>
                            <span>끌올 59초 전</span>
                        </div>
                        <span className="product__price">8,000원</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product4} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">아이폰 13프로맥스</span>
                        <div className="product-desc">
                            <span>군자동</span>
                            <span>·</span>
                            <span>1일 전</span>
                        </div>
                        <span className="product__price">1,000,000원</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product5} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">커피머신</span>
                        <div className="product-desc">
                            <span>구리시 교문 1동</span>
                            <span>·</span>
                            <span>1초 전</span>
                        </div>
                        <span className="product__price">100,000원</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Bottom = () => {
    return (
        <nav className="bottom-bar">
            <button className="btn" type="button">
                <img src={bottomHomeIcon} alt="홈" />
                <span className="desc">홈</span>
            </button>
            <button className="btn" type="button">
                <img src={newsIcon} alt="동네생활" />
                <span className="desc">동네생활</span>
            </button>
            <button className="btn" type="button">
                <img src={localIcon} alt="내 근처" />
                <span className="desc">내 근처</span>
            </button>
            <button className="btn" type="button">
                <img src={bottomChatIcon} alt="채팅" />
                <span className="desc">채팅</span>
            </button>
            <button className="btn" type="button">
                <img src={myIcon} alt="나의당근" />
                <span className="desc">나의 당근</span>
            </button>
            <button className="plus-btn" type="button">
                <img className="plus-img" src={plusIcon} alt="글쓰기" />
            </button>
        </nav>
    );
};


const Home = () => {
    return (
        <div className="danggn">
            <Header />
            <Post />
            <Bottom />
        </div>
    );
};

export default Home;
