import "../styles/BottomNav.css";

import Plus from "../assets/plus.svg";
import BottomHome from "../assets/bottom-bar_home.svg";
import BottomNews from "../assets/bottom-bar_news.svg";
import BottomRocation from "../assets/bottom-bar_location.svg";
import BottomChat from "../assets/bottom-bar_chat.svg";
import BottomMypage from "../assets/bottom-bar_mypage.svg";

const BottomNav = () => {
  return (
    <>
      <nav>
        <button class="add-btn">
          <img src={Plus} alt="판매 게시글 추가 버튼 이미지" />
        </button>
        <div class="bottom-bar">
          <button class="bottom-bar__container">
            <img src={BottomHome} alt="홈 페이지로 이동하는 버튼" />
            <span>홈</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomNews} alt="동네생활 페이지로 이동하는 버튼" />
            <span>동네생활</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomRocation} alt="내 근처 페이지로 이동하는 버튼" />
            <span>내 근처</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomChat} alt="채팅 페이지로 이동하는 버튼" />
            <span>채팅</span>
          </button>
          <button class="bottom-bar__container">
            <img src={BottomMypage} alt="나의 당근페이지로 이동하는 버튼" />
            <span>나의 당근</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
