import React from "react";
import downArrow from '../assets/down-arrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import bell from '../assets/bell.svg';

const Header = () => {
  return (
    <header className="fixed-header">
      <div className="location-selector">
        <span className="location-name">군자동</span>
        <button className="down-arrow-btn">
          <img src={downArrow} alt="위치 선택" />
        </button>
      </div>
      <div className="header-icons">
        <button className="search-btn">
          <img src={search} alt="검색" />
        </button>
        <button className="menu-btn">
          <img src={menu} alt="메뉴" />
        </button>
        <button className="bell-btn">
          <img src={bell} alt="알림" />
        </button>
      </div>
    </header>
  );
};

export default Header;