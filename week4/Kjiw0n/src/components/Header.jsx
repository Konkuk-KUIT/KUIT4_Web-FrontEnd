import React from "react";

const Header = ({ location }) => {
    return (
        <>
            <header className="home-header">
                <div className="home-header__location-container">
                    <span className="location__name">{location}</span>
                    <button type="button">
                        <img
                            src="./assets/down-chevron.svg"
                            alt="select location button"
                        />
                    </button>
                </div>
                <div className="home-header__icon-container">
                    <button type="button">
                        <img src="./assets/Search.svg" alt="search button" />
                    </button>
                    <button type="button">
                        <img src="./assets/Menu.svg" alt="menu button" />
                    </button>
                    <button type="button">
                        <img
                            src="./assets/Notification.svg"
                            alt="notification button"
                        />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
