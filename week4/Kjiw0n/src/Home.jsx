import React from "react";
import "./styles/index.css";
import marketModel from "./models/MarketModel";

const Header = ({ location }) => {
    return (
        <>
            <header className="home-header">
                <div className="home-header__location-container">
                    <span className="location__name">{location}</span>
                    <button type="button">
                        <img
                            src="./assets/down-chevron.svg"
                            alt="select location button"
                        />
                    </button>
                </div>
                <div className="home-header__icon-container">
                    <button type="button">
                        <img src="./assets/Search.svg" alt="search button" />
                    </button>
                    <button type="button">
                        <img src="./assets/Menu.svg" alt="menu button" />
                    </button>
                    <button type="button">
                        <img
                            src="./assets/Notification.svg"
                            alt="notification button"
                        />
                    </button>
                </div>
            </header>
        </>
    );
};

const Content = ({ items }) => {
    return (
        <>
            <section className="product-list">
                {items.map((item) =>
                    item.isSold === true ? (
                        <div
                            className="product-list__item-container"
                            key={item.id}
                        >
                            <img
                                src={item.image}
                                alt={item.image_alt}
                                className="item__img"
                            />
                            <div className="item__info">
                                <div className="item__content">
                                    <span className="item__title">
                                        {item.title}
                                    </span>
                                    <div className="item__info-detail">
                                        <span className="item__location">
                                            {item.location}
                                        </span>
                                        <span>·</span>
                                        <span className="item__time">
                                            {item.timeAgo}
                                        </span>
                                    </div>
                                    <span className="item__price">
                                        {item.price}
                                    </span>
                                </div>

                                <div className="item__icon-container">
                                    <div className="item__comment-icon">
                                        <img
                                            src="/assets/comment.svg"
                                            alt="comment icon"
                                        />
                                        <span className="item__comment-count">
                                            {item.comments}
                                        </span>
                                    </div>
                                    <div className="item__favorite-icon">
                                        <img
                                            src="assets/favorite.svg"
                                            alt="favorite icon"
                                        />
                                        <span className="item__favorite-count">
                                            {item.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                )}
            </section>
        </>
    );
};

const BottomNav = () => {
    return (
        <>
            <section className="bottom-menu">
                <button type="button" className="bottom-menu__home">
                    <img src="assets/Home.svg" alt="home button" />
                    <span>홈</span>
                </button>
                <button type="button" className="bottom-menu__news">
                    <img src="assets/News.svg" alt="news button" />
                    <span>동네생활</span>
                </button>
                <button type="button" className="bottom-menu__near-by-me">
                    <img
                        src="assets/Place Marker.svg"
                        alt="near by me button"
                    />
                    <span>내 근처</span>
                </button>
                <button type="button" className="bottom-menu__chat">
                    <img src="assets/Chat.svg" alt="chatting button" />
                    <span>채팅</span>
                </button>
                <button type="button" className="bottom-menu__user">
                    <img src="assets/User.svg" alt="user home button" />
                    <span>나의 당근</span>
                </button>
            </section>
        </>
    );
};

const Home = () => {
    const { location, items } = marketModel;
    return (
        <div>
            <Header location={location} />
            <Content items={items} />
            <BottomNav />
        </div>
    );
};

export default Home;
