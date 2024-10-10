import React from "react"

const Header = () => {
    return (
      <section className="post-header">
        <header>
          <div className="post-header__icon-container">
            <button type="button">
              <img src="./assets/left-chevron.svg" alt="go back" />
            </button>
            <button type="button">
              <img src="./assets/home.svg" alt="go home" />
            </button>
          </div>
  
          <div className="post-header__icon-container">
            <button type="button">
              <img src="./assets/share.svg" alt="share product" />
            </button>
            <button type="button">
              <img src="./assets/kebab.svg" alt="open settings" />
            </button>
          </div>
        </header>
  
        <div className="post__image-container">
          <img src="http://placehold.co/720" alt="wh-1000xm5 실버" />
        </div>
      </section>
    );
  };

export default Header;