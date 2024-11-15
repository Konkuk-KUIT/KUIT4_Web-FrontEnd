import expandArrow from '../assets/expandArrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import notification from '../assets/notification.svg';

const Header = (props) => {
    const { location: userLocation } = props.marketModel; //비구조화 할당
    return(
      <section className="top-header">
          <header>
              <div className="header-place">
                  <span id="place">{userLocation}</span>
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