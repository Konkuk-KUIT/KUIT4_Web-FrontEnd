import React from "react";

const Header = () => {
    return (
        <nav className="top-menu">
            <div className="now-where">
                <div className="now-where-title">군자동 </div>  
                <img className="down-arrrow" src="assest/ExpandArrow.svg" alt="드롭다운 메뉴"/>
            </div>
            <div className="top-menu-icons">
                <img className="top-menu-icon" src="assest/Search.svg" alt="돋보기"/>
                <img className="top-menu-icon" src="assest/Menu.svg" alt="돋보기"/>
                <img className="top-menu-icon" src="assest/Notification.svg" alt="돋보기"/>
            </div>
        </nav>
    );
};

const Content = () => {
  return (
    <div className="main-contents">
        <div className="main-article">
            <img src="assest/img1.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">에어팟프로</div>
                <div className="desc-text">
                    <div className="desc-where">군자동</div>
                    <div className="desc-when">3일전</div>
                </div>
                <div className="desc-cost">220,000원</div>
                <div className="img-zone">
                    <img className="desc-message-img1" src="assest/bx_chat.svg" />
                    <span>3</span>
                    <img className="desc-heart-img2" src="assest/ant-design_heart-outlined.svg"/>
                    <span>11</span>
                </div>
            </div>
        </div>
        <div className="main-article">
            <img src="assest/img2.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">바이레도 블랑쉬 50ml</div>
                <div className="desc-text">
                    <div className="desc-where">광진구 구의제3동 </div>
                    <div className="desc-when">26초 전</div>
                </div>
                <div className="desc-cost">4,000원</div>
                <div className="img-zone">
                    <img className="desc-heart-img2" src="assest/ant-design_heart-outlined.svg"/>
                    <span>2</span>
                </div>
            </div>
        </div>  
        <div className="main-article">
            <img src="assest/img3.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">샌드위치</div>
                <div className="desc-text">
                    <div className="desc-where">동대문구 휘경동 </div>
                    <div className="desc-when">끌올 59초전</div>
                </div>
                <div className="desc-cost">8,000원</div>
                <div className="img-zone"> </div>
            </div>
        </div>
        <div className="main-article">
            <img src="assest/img4.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">아이폰 13프로맥스</div>
                <div className="desc-text">
                    <div className="desc-where">군자동 </div>
                    <div className="desc-when">1일전</div>
                </div>
                <div className="desc-cost">1,000,000원</div>
                <div className="img-zone"> </div>
            </div>
        </div>
        <div className="main-article">
            <img src="assest/img2.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">커피머신</div>
                <div className="desc-text">
                    <div className="desc-where">구리시 교문1동 </div>
                    <div className="desc-when">1초전</div>
                </div>  
                <div className="desc-cost">100,000원</div>
                <div className="img-zone"> </div>
            </div>
        </div>
        <div className="main-article">
            <img src="assest/img2.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">커피머신</div>
                <div className="desc-text">
                    <div className="desc-where">구리시 교문1동 </div>
                    <div className="desc-when">1초전</div>
                </div>  
                <div className="desc-cost">100,000원</div>
                <div className="img-zone"> </div>
            </div>
        </div>
        <div className="main-article">
            <img src="assest/img2.svg" className="productImg" alt="제품사진1"/>
            <div className="article1-desc">
                <div className="desc-header">커피머신</div>
                <div className="desc-text">
                    <div className="desc-where">구리시 교문1동 </div>
                    <div className="desc-when">1초전</div>
                </div>  
                <div className="desc-cost">100,000원</div>
                <div className="img-zone"> </div>
            </div>
        </div>
        <div className="fixed-button">
            <img className="plus-button" alt="can go anywhere to want" src="assest/Frame 21.svg" />
        </div>
    </div>
  );
};

const BottomNav = () => {
  return (
    <nav className="bottom-menu">
        <div className="bottom-menus-btn">
            <div className="bottom">
                <img className="menu-btn" src="assest/Home (2).svg" alt="홈 메뉴"/>
                <div className="btn-title">홈</div>  
            </div>
        </div>
        <div className="bottom-menus-btn">
            <div className="bottom">
                <img className="menu-btn" src="assest/News.svg" alt="동네생활 메뉴"/>
                <div className="btn-title">동네생활</div> 
            </div> 
        </div>
        <div className="bottom-menus-btn">
            <div className="bottom">
                <img className="menu-btn" src="assest/Place Marker.svg" alt="내 근처 메뉴"/>
                <div className="btn-title">내 근처</div>  
            </div>  
        </div>
        <div className="bottom-menus-btn">
            <div className="bottom">
                <img className="menu-btn" src="assest/Chat.svg" alt="채팅 메뉴"/>
                <div className="btn-title">채팅</div>  
            </div>  
        </div>
        <div className="bottom-menus-btn">
            <div className="bottom">
                <img className="menu-btn" src="assest/User.svg" alt="나의 당근 메뉴"/>
                <div className="btn-title">나의 당근</div>  
            </div>  
        </div>
    </nav>
  );
}

const Home = () => {
  return <div>Home</div>;
};

export default Home;
