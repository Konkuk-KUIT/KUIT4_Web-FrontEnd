import expandArrow from '../assets/expandArrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import notification from '../assets/notification.svg';


const Header = () => {
    return(
        <nav class="header-menu">
            <div class="address">
                <div class="address-title">군자동 </div>
                <img class="expand-arrrow" src={expandArrow} alt="드롭다운 메뉴" />
            </div>
            <div class="header-menu-button">
                <img src={search} alt="검색하기" />
                <img src={menu} alt="메뉴" />
                <img src={notification} alt="알림" />
            </div>
        </nav>
    );
};

export default Header;