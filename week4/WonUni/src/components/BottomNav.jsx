import React from "react";

const BottomNav = () => {
  return (
    <nav className="footer-menu-container">
      <button type="button" className="footer-menu">
        <img src="assets/home-img.svg" alt="홈" />
        <span>홈</span>
      </button>
      <button type="button" className="footer-menu">
        <img src="assets/life.svg" alt="동네생활" />
        <span>동네생활</span>
      </button>
      <button type="button" className="footer-menu">
        <img src="assets/around.svg" alt="내 근처" />
        <span>내 근처</span>
      </button>
      <button type="button" className="footer-menu">
        <img src="assets/chat.svg" alt="채팅" />
        <span>채팅</span>
      </button>
      <button type="button" className="footer-menu">
        <img src="assets/profile.svg" alt="나의 당근" />
        <span>나의 당근</span>
      </button>
    </nav>
  );
};

export default BottomNav;
