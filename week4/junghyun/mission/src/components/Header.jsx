import icon_expand_arrow from "../assets/expand-arrow.svg";
import icon_menu from "../assets/menu.svg";
import icon_notification from "../assets/notification.svg";
import icon_search from "../assets/search.svg";

const Header = ({ location }) => {
  return (
    <section className="home-header">
      <header>

        <div className="home-header__location-container">
          <span className="header__location">{location}</span>
          <button type="button">
            <img src={icon_expand_arrow} alt="select location button" />
          </button>
        </div>

        <div className="home-header__icon-container">
          <button type="button">
            <img src={icon_search} alt="search button" />
          </button>
          <button type="button">
            <img src={icon_menu} alt="menu button" />
          </button>
          <button type="button">
            <img src={icon_notification} alt="notification button" />
          </button>
        </div>

      </header>
    </section>
  );
};
export default Header;