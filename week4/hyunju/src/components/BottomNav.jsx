import React from "react";
import "./style.css";

const BottomNav = () => {
    return (
      <nav className="bottom-menu">
          <div className="bottom-menus-btn">
              <div className="bottom">
                  <img className="menu-btn" src="/assest/Home (2).svg" alt="홈 메뉴"/>
                  <div className="btn-title">홈</div>  
              </div>
          </div>
          <div className="bottom-menus-btn">
              <div className="bottom">
                  <img className="menu-btn" src="/assest/News.svg" alt="동네생활 메뉴"/>
                  <div className="btn-title">동네생활</div> 
              </div> 
          </div>
          <div className="bottom-menus-btn">
              <div className="bottom">
                  <img className="menu-btn" src="/assest/Place Marker.svg" alt="내 근처 메뉴"/>
                  <div className="btn-title">내 근처</div>  
              </div>  
          </div>
          <div className="bottom-menus-btn">
              <div className="bottom">
                  <img className="menu-btn" src="/assest/Chat.svg" alt="채팅 메뉴"/>
                  <div className="btn-title">채팅</div>  
              </div>  
          </div>
          <div className="bottom-menus-btn">
              <div className="bottom">
                  <img className="menu-btn" src="/assest/User.svg" alt="나의 당근 메뉴"/>
                  <div className="btn-title">나의 당근</div>  
              </div>  
          </div>
      </nav>
    );
};

export default BottomNav;
