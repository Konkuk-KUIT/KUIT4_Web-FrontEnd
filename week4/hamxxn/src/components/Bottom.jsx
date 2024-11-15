import Plus from "../assets/plus.svg";
import Home_2 from "../assets/home_2.svg";
import Ariticle from "../assets/article.svg";
import PlaceMarker from "../assets/place-marker.svg";
import ChatMessageTwo from "../assets/chat-message_two.svg";
import User from "../assets/user.svg";

import "../styles/BottomNav.css";
const Button = (props) => {
  const [src, text] = [props.src, props.text];
  return (
    <>
      <button className="bottom-bar__item">
        <img src={src} alt={text + "버튼"} className="bottom-bar__icon" />
        <span className="bottom-bar__text">{text}</span>
      </button>
    </>
  );
};
const BottomNav = () => {
  return (
    <>
      <nav className="bottom-bar">
        <button className="plus__btn">
          <img alt="홈버튼" src={Plus} />
        </button>
        <Button src={Home_2} text={"홈"} />
        <Button src={Ariticle} text="동네생활" />
        <Button src={PlaceMarker} text="내 근처" />
        <Button src={ChatMessageTwo} text="채팅 버튼" />
        <Button src={User} text="나의 당근" />
      </nav>
    </>
  );
};
export default BottomNav;
