import ChatMessageBlock from "../assets/chat-message_block.svg";
import Plus from "../assets/plus.svg";
import Home_2 from "../assets/home_2.svg";
import Ariticle from "../assets/article.svg";
import PlaceMarker from "../assets/place-marker.svg";
import ChatMessageTwo from "../assets/chat-message_two.svg";
import User from "../assets/user.svg";

import "../styles/BottomNav.css";
const BottomNav = () => {
  return (
    <>
      <nav className="bottom-bar">
        <button className="plus__btn">
          <img alt="홈버튼" src={Plus} />
        </button>
        <button className="bottom-bar__item">
          <img src={Home_2} alt="홈 버튼" className="bottom-bar__icon" />
          <span className="bottom-bar__text">홈</span>
        </button>
        <button className="bottom-bar__item">
          <img
            src={Ariticle}
            alt="동네 생활 버튼"
            className="bottom-bar__icon"
          />
          <span className="bottom-bar__text">동네생활</span>
        </button>
        <button className="bottom-bar__item">
          <img
            src={PlaceMarker}
            alt="내 근처 버튼"
            className="bottom-bar__icon"
          />
          <span className="bottom-bar__text">내 근처</span>
        </button>
        <button className="bottom-bar__item">
          <img
            src={ChatMessageTwo}
            alt="채팅 버튼"
            className="bottom-bar__icon"
          />
          <span className="bottom-bar__text">채팅</span>
        </button>
        <button className="bottom-bar__item">
          <img src={User} alt="나의 당근 버튼" className="bottom-bar__icon" />
          <span className="bottom-bar__text">나의 당근</span>
        </button>
      </nav>
    </>
  );
};
export default BottomNav;
