import expandArrow from '../assets/expandArrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import notification from '../assets/notification.svg';

const Header = (props) => { //props 사용
    const {location} = props.marketModel;
    return(
        <nav className="header-menu">
            <div className="address">
                <div className="address-title">{location}</div>
                <img className="expand-arrrow" src={expandArrow} alt="드롭다운 메뉴" />
            </div>
            <div className="header-menu-button">
                <img src={search} alt="검색하기" />
                <img src={menu} alt="메뉴" />
                <img src={notification} alt="알림" />
            </div>
        </nav>
    );
};

export default Header;