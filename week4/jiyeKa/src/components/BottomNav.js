import home from '../assets/home.svg';
import news from '../assets/news.svg';
import placeMarker from '../assets/placeMarker.svg';
import chatLarge from '../assets/chatLarge.svg';
import user from '../assets/user.svg';

const BottomNav = () => {
    return(
        <nav className="bottom-menu">
            <div className="bottom-menu--btn">
                <img className="menu-btn" src={home} alt="홈 메뉴" />
                <div className="btn-title">홈</div>
            </div>
            <div className="bottom-menu--btn">
                <img className="menu-btn" src={news} alt="동네생활 메뉴" />
                <div className="btn-title">동네생활</div>
            </div>
            <div className="bottom-menu--btn">
                <img className="menu-btn" src={placeMarker} alt="내 근처 메뉴" />
                <div className="btn-title">내 근처</div>
            </div>
            <div className="bottom-menu--btn">
                <img className="menu-btn" src={chatLarge} alt="채팅 메뉴" />
                <div className="btn-title">채팅</div>
            </div>
            <div className="bottom-menu--btn">
                <img className="menu-btn" src={user} alt="나의 당근 메뉴" />
                <div className="btn-title">나의 당근</div>
            </div>
        </nav>
    );
};

export default BottomNav;