import React from "react";
import downChevron from "../assets/down-chevron.svg";
import search from "../assets/search.svg";
import notification from "../assets/notification.svg";

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
                <img src={search} alt="검색" />
                <img src={hamburger} alt="메뉴" />
                <img src={notification} alt="알림" />
            </div>
        </section>
    );
};

export default Header;
