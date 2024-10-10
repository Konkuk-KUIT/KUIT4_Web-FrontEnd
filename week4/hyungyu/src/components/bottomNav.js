import home from '../assets/home.svg';
import news from '../assets/news.svg';
import placeMarker from '../assets/placeMarker.svg';
import chatLarge from '../assets/chatLarge.svg';
import user from '../assets/user.svg';

const BottomNav = () => {
    return(
      <nav className="bottom-bar">
          <div className="bottom-bar-footer">
              <div className="bottom-bar-icons">
                  <button type="button">
                      <img src={home} alt="home button"/>
                  </button>
                  <span>홈</span>
              </div>
              <div className="bottom-bar-icons">
                  <button type="button">
                      <img src={news} alt="home button"/>
                  </button>
                  <span>동네생활</span>
              </div>
              <div className="bottom-bar-icons">
                  <button type="button">
                      <img src={placeMarker} alt="home button"/>
                  </button>
                  <span>내 근처</span>
              </div>
              <div className="bottom-bar-icons">
                  <button type="button">
                      <img src={chatLarge} alt="home button"/>
                  </button>
                  <span>채팅</span>
              </div>
              <div className="bottom-bar-icons">
                  <button type="button">
                      <img src={user} alt="home button"/>
                  </button>
                  <span>나의 당근</span>
              </div>
          </div>
       </nav>
    );
};

export default BottomNav;