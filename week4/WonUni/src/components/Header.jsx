import React from "react";

const Header = () => {
  return (
    <div className="main__header">
      <button className="select__address-btn">
        <span>구의동</span>
        <img src="assets/down-chevron.svg" alt="지역 설정" />
      </button>

      <div className="etc-menu">
        <button className="search-btn" type="button">
          <img src="assets/search-btn.svg" alt="검색" />
        </button>
        <button className="list-btn" type="button">
          <img src="assets/list-btn.svg" alt="리스트 보기" />
        </button>
        <button className="alarm-btn" type="button">
          <img src="assets/alarm-btn.svg" alt="알람 설정" />
        </button>
      </div>
    </div>
  );
};

export default Header;
