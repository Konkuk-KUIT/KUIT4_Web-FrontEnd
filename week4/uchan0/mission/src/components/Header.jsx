import React from "react";
import ImageCollection from "../ImageCollection";

const Header = ({ location }) => {
  return (
    <header className="main-header">
      <button type="button" className="location__container">
        <div className="location__container--text">{location}</div>
        <ImageCollection imgName={"down-chevron.svg"} />
      </button>
      <div className="header__icon-container">
        <button type="button">
          <ImageCollection imgName={"search.svg"} />
        </button>
        <button type="button">
          <ImageCollection imgName={"hamburger.svg"} />
        </button>
        <button type="button">
          <ImageCollection imgName={"bell.svg"} />
        </button>
      </div>
    </header>
  );
};

export default Header;
