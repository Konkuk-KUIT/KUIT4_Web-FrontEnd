import React from "react";

const Header = () => {
    return (
        <header>
            <div className="header-left-container">
                <button type="button">
                    <span>군자동</span>
                </button>
                <button type="button">
                    <img src="./assets/downchevron.svg" alt="down chevron" />
                </button>
            </div>
            <div className="header-icon-container">
                <button type="button">
                    <img className="preview" src="./assets/searching.svg" alt="검색하기" />
                </button>
                <button type="button">
                    <img className="preview" src="./assets/menu.svg" alt="메뉴" />
                </button>
                <button>
                    <img className="preview" src="./assets/bell.svg" alt="종모양" />
                </button>
            </div>
        </header>
    );
};

export default Header;