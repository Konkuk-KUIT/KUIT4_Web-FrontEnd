import React from "react";

const Header = ({ location }) => {
    return (
        <section className="header-bar">
            <header>
                <div className="header_icon-left">
                    <span className="location">{location}</span>
                    <button type="button">
                        <img src="./assets/bottom-arrow.svg" alt="bottom-arrow" />
                    </button>
                </div>
                <div className="header_icon-right">
                    <button type="button">
                        <img src="./assets/search.svg" alt="search" />
                    </button>
                    <button type="button">
                        <img src="./assets/menu.svg" alt="menu" />
                    </button>
                    <button type="button">
                        <img src="./assets/notification.svg" alt="notification" />
                    </button>
                </div>
            </header>
        </section>
    );
};

export default Header;
