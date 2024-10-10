import React from 'react'


const BottomNav = () => {
    return(
      <nav className="bottom-bar">
          <div className="bar__info-container">
              <img src="./assets/heart.svg" alt="게시글 좋아요 버튼"/>
              <div className="divider"></div>
              <div className="bar__info">
                  <span className="product__price">360,000원</span>
                  <span className="product_desc">가격 제안 불가</span>
              </div>
          </div>
          <button class="bar__chat-btn" type="button">채팅하기</button>
      </nav>
    );
  };

export default BottomNav;