import "../styles/Header.css";

import DownChervon from "../assets/down-chervon.svg";
import Search from "../assets/search.svg";
import Menu from "../assets/menu.svg";
import Notification from "../assets/notification.svg";

const Header = ({ location }) => {
  return (
    <>
      <header>
        <div class="icon-container">
          <span>{location}</span>
          <button type="button">
            <img src={DownChervon} alt="지역 선택 버튼" />
          </button>
        </div>
        <div class="icon-container">
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Search}
              alt="검색 버튼"
            />
          </button>
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Menu}
              alt="메뉴 선택 버튼"
            />
          </button>
          <button type="button">
            <img
              class="icon-container__right-img"
              src={Notification}
              alt="알림 버튼"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
