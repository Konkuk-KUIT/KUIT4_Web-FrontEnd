const Header = () => {
    return (
        <nav className="top-menu">
            <div className="now-where">
                <div className="now-where-title">군자동 </div>  
                <img className="down-arrrow" src="assest/ExpandArrow.svg" alt="드롭다운 메뉴"/>
            </div>
            <div className="top-menu-icons">
                <img className="top-menu-icon" src="assest/Search.svg" alt="돋보기"/>
                <img className="top-menu-icon" src="assest/Menu.svg" alt="돋보기"/>
                <img className="top-menu-icon" src="assest/Notification.svg" alt="돋보기"/>
            </div>
        </nav>
    );
};