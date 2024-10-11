import React from "react";
const Header = () => {
    return (
        <section className="post-header">
            <button type="button">
                <div className="user-location">
                    <span>군자동</span>
                    <img src={downChevron} alt="location list" />
                </div>
            </button>

            <div className="post-header__icon-container">
                <img src={searchIcon} alt="검색" />
                <img src={hamburgerIcon} alt="메뉴" />
                <img src={notificationIcon} alt="알림" />
            </div>
        </section>
    );
};

export default Header;
