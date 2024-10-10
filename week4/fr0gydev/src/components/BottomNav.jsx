import React from "react";
import home from '../assets/home.svg';
import news from '../assets/news.svg';
import location from '../assets/location.svg';
import message from '../assets/message.svg';
import user from '../assets/user.svg';

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

export default BottomNav;