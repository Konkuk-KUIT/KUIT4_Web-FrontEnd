import home from '../assets/home.svg';
import news from '../assets/news.svg';
import placeMarker from '../assets/placeMarker.svg';
import chatLarge from '../assets/chatLarge.svg';
import user from '../assets/user.svg';

const BottomNav = () => {
    return(
        <nav class="bottom-menu">
            <div class="bottom-menu--btn">
                <img class="menu-btn" src={home} alt="홈 메뉴" />
                <div class="btn-title">홈</div>
            </div>
            <div class="bottom-menu--btn">
                <img class="menu-btn" src={news} alt="동네생활 메뉴" />
                <div class="btn-title">동네생활</div>
            </div>
            <div class="bottom-menu--btn">
                <img class="menu-btn" src={placeMarker} alt="내 근처 메뉴" />
                <div class="btn-title">내 근처</div>
            </div>
            <div class="bottom-menu--btn">
                <img class="menu-btn" src={chatLarge} alt="채팅 메뉴" />
                <div class="btn-title">채팅</div>
            </div>
            <div class="bottom-menu--btn">
                <img class="menu-btn" src={user} alt="나의 당근 메뉴" />
                <div class="btn-title">나의 당근</div>
            </div>
        </nav>
    );
};

export default BottomNav;