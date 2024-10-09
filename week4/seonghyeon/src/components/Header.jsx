import React from "react";

const Header = () => {
  return (
    <header className="header">
      <span className="location">군자동 ▼</span>
      <div className="icons">
        <img src="./assets/right-chevron.svg" alt="Search" className="icon" />
      </div>
    </header>
  );
};

export default Header;