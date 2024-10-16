import React from "react";

const BottomNav = () => {
    return (
        <nav className="bottom-bar">
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
        </nav>
    );
};
export default BottomNav;