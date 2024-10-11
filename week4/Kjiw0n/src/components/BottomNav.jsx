import React from "react";

const BottomNav = () => {
    return (
        <>
            <section className="bottom-menu">
                <button type="button">
                    <img src="assets/Home.svg" alt="home button" />
                    <span>홈</span>
                </button>
                <button type="button">
                    <img src="assets/News.svg" alt="news button" />
                    <span>동네생활</span>
                </button>
                <button type="button">
                    <img
                        src="assets/Place Marker.svg"
                        alt="near by me button"
                    />
                    <span>내 근처</span>
                </button>
                <button type="button">
                    <img src="assets/Chat.svg" alt="chatting button" />
                    <span>채팅</span>
                </button>
                <button type="button">
                    <img src="assets/User.svg" alt="user home button" />
                    <span>나의 당근</span>
                </button>
            </section>
        </>
    );
};

export default BottomNav;
