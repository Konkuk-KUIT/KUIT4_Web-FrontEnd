import expandArrow from '../assets/expandArrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import notification from '../assets/notification.svg';

import marketModel from '../models/MarketModel';

const Header = () => {
    const { location } = marketModel;
    return(
      <section className="top-header">
          <header>
              <div className="header-place">
                  <span id="place">{location}</span>
                  <button type="button">
                      <img src={expandArrow} alt="expandArrow"/>
                  </button>
              </div>
              <div className="header-icon-container">
                  <button type="button">
                      <img src={search} alt="expandArrow"/>
                  </button>
                  <button type="button">
                      <img src={menu} alt="expandArrow"/>
                  </button>
                  <button type="button">
                      <img src={notification} alt="expandArrow"/>
                  </button>
              </div>
          </header>
       </section>
    );
  };

export default Header;  