import React from "react";

const Header = () => {
    return (
        <section className="header-bar">
            <header>
                <div className="header_icon-left">
                    <span className="location">군자동</span>
                    <button type="button">
                        <img src="./assets/bottom-arrow.svg" alt="bottom-arrow" />
                    </button>
                </div>
                <div className="header_icon-right">
                    <button type="button">
                        <img src="./assets/search.svg" alt="search" />
                    </button>
                    <button type="button">
                        <img src="./assets/menu.svg" alt="menu" />
                    </button>
                    <button type="button">
                        <img src="./assets/notification.svg" alt="notification" />
                    </button>
                </div>
            </header>
        </section>
    );
};

const Content = () => {
    return (
        <article className="post">
            <section className="post__container">
                <img className="content-image" src="./assets/airpods.png" alt="에어팟프로" />
                <div className="post-content">
                    <div className="content-top">
                        <h2 className="content-title">에어팟프로</h2>
                        <div className="description">
                            <span>군자동</span>
                            <span>·</span>
                            <span>끌올1분전</span>
                        </div>
                        <span className="price">220,000원</span>
                    </div>

                    <div className="content-bottom">
                        <div className="des-container">
                            <img src="./assets/comment.svg" alt="댓글" />
                            <span className="comment">3</span>
                        </div>
                        <div className="des-container">
                            <img src="./assets/heart.svg" alt="하트" />
                            <span className="heart">11</span>
                        </div>
                    </div>
                </div>
            </section>
            <img className="post-line" src="./assets/line.svg" alt="line" />

            <section className="post__container">
                <img className="content-image" src="./assets/perfume.png" alt="바이레도 블랑쉬 50ml" />
                <div className="post-content">
                    <div className="content-top">
                        <h2 className="content-title">바이레도 블랑쉬 50ml</h2>
                        <div className="description">
                            <span>광진구 구의제3동</span>
                            <span>·</span>
                            <span>26초전</span>
                        </div>
                        <span className="price">4,000원</span>
                    </div>

                    <div className="content-bottom">
                        <div className="des-container">
                            <img src="./assets/heart.svg" alt="하트" />
                            <span className="heart">2</span>
                        </div>
                    </div>
                </div>
            </section>
            <img className="post-line" src="./assets/line.svg" alt="line" />

            <section className="post__container">
                <img className="content-image" src="./assets/sandwich.png" alt="샌드위치" />
                <div className="post-content">
                    <div className="content-top">
                        <h2 className="content-title">샌드위치</h2>
                        <div className="description">
                            <span>동대문구 휘경동</span>
                            <span>·</span>
                            <span>끌올 59초 전</span>
                        </div>
                        <span className="price">8,000원</span>
                    </div>
                </div>
            </section>
            <img className="post-line" src="./assets/line.svg" alt="line" />

            <section className="post__container">
                <img className="content-image" src="./assets/smartphone.png" alt="아이폰 13프로맥스" />
                <div className="post-content">
                    <div className="content-top">
                        <h2 className="content-title">아이폰 13프로맥스</h2>
                        <div className="description">
                            <span>군자동</span>
                            <span>·</span>
                            <span>1일전</span>
                        </div>
                        <span className="price">1,000,000원</span>
                    </div>
                </div>
            </section>
            <img className="post-line" src="./assets/line.svg" alt="line" />

            <section className="post__container">
                <img className="content-image" src="./assets/coffeemachine.png" alt="커피머신" />
                <div className="post-content">
                    <div className="content-top">
                        <h2 className="content-title">커피머신</h2>
                        <div className="description">
                            <span>구리시 교문1동</span>
                            <span>·</span>
                            <span>1초전</span>
                        </div>
                        <span className="price">100,000원</span>
                    </div>
                </div>
            </section>
            <img className="post-line" src="./assets/line.svg" alt="line" />
        </article>
    );
};

const BottomBtn = () => {
    return (
        <section className="bottom-plus">
            <div className="plus-container">
                <div className="plus">
                    <img src="./assets/plusmath.svg" alt="글쓰기" />
                </div>
            </div>
        </section>
    );
};

const BottomNav = () => {
    return (
        <nav className="bottom-bar">
            <section className="bottom__containers">
                <div className="icon-containers">
                    <div className="container">
                        <img src="./assets/home.svg" alt="home" />
                        <span className="icon-des">홈</span>
                    </div>
                    <div className="container">
                        <img src="./assets/news.svg" alt="news" />
                        <span className="icon-des">동네생활</span>
                    </div>
                    <div className="container">
                        <img src="./assets/placemarker.svg" alt="place marker" />
                        <span className="icon-des">내근처</span>
                    </div>
                    <div className="container">
                        <img src="./assets/chat.svg" alt="chat" />
                        <span className="icon-des">채팅</span>
                    </div>
                    <div className="container">
                        <img src="./assets/user.svg" alt="user" />
                        <span className="icon-des">나의 당근</span>
                    </div>
                </div>
            </section>
        </nav>
    );
};

const Home = () => {
    return (
        <div className="component">
            <Header />
            <Content />
            <BottomBtn />
            <BottomNav />
        </div>
    );
};

export default Home;
