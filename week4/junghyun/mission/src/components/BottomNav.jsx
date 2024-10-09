import icon_chat from "../assets/chat.svg";
import icon_home from "../assets/home.svg";
import icon_news from "../assets/news.svg";
import icon_place_marker from "../assets/place-marker.svg";
import icon_user from "../assets/user.svg";

const BottomNav = () => {
  return (
    <nav className="bottom-bar">
      <button className="bar__btn" type="button">
        <img className="bar__icon" src={icon_home} alt="home button" />
        <span className="bar__text">홈</span>
      </button>
      <button className="bar__btn" type="button">
        <img className="bar__icon" src={icon_news} alt="news button" />
        <span className="bar__text">동네생활</span>
      </button>
      <button className="bar__btn" type="button">
        <img className="bar__icon" src={icon_place_marker} alt="nearby me button" />
        <span className="bar__text">내 근처</span>
      </button>
      <button className="bar__btn" type="button">
        <img className="bar__icon" src={icon_chat} alt="chatting button" />
        <span className="bar__text">채팅</span>
      </button>
      <button className="bar__btn" type="button">
        <img className="bar__icon" src={icon_user} alt="user button" />
        <span className="bar__text">나의 당근</span>
      </button>
    </nav>
  );
};
export default BottomNav;