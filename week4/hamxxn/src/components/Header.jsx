import React from "react";

import DownChervorn from "../assets/down-chervorn.svg";
import Search from "../assets/search.svg";
import Menu from "../assets/menu.svg";
import Notification from "../assets/notification.svg";

import "../styles/Header.css";

const Header = (props) => {
  return (
    <>
      <nav className="header">
        <button className="header__location">
          <h1 className="location__name">{props.location}</h1>
          <img
            className="location__icon"
            src={DownChervorn}
            alt="지역 선택 버튼"
          />
        </button>

        <div className="header__icons">
          <button>
            <img src={Search} alt="검색 버튼" />
          </button>
          <button>
            <img src={Menu} alt="메뉴 버튼" />
          </button>
          <button>
            <img src={Notification} alt="알림 버튼" />
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
