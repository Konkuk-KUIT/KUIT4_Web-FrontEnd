import React from 'react'


const Content = () => {
    return(
      <article className="post">
          <section className="post__header">
              <div className="header__user">
                  <img className="user__profile-img" src="http://placehold.co/240" alt="user's prifile image"/>
                  <div className="user__info">
                      <span className="user__name">감성탐방러</span>
                      <span className="user__address">중랑구 면목동</span>
                  </div>
              </div>
  
  
  
              <div className="header__temperature">
                  <div className="temperature__container">
                      <div className="temperature__indicator">
                          <span className="temperature__value">37.2°C</span>
                          <div className="temperature__bar">
                              <div className="temperature__bar--value"></div>
  
                          </div>
                      </div>
                      <span>🙂</span>
  
                  </div>
                  <button type="button">
                      <span className="temperature__description">매너온도</span>
                  </button>
  
  
              </div>
  
  
  
  
          </section>
          <section className="post__content">
              <h1 className="post__title">소니 wh-1000xm5 실버 팝니다.</h1>
              <div className="desc__container">
                  <span className="desc--clickable">디지털기기</span>
                  <span>·</span>
                  <span>끌올 1일 전</span>
              </div>
              <p className="post__text">
                  8/31일 해외직구한<br /> 한달도 안된제품 입니다.<br /> 박풀 S급입니다.
              </p>
              <div className="desc__container"> 
                  <span className="desc--clickable">관심 15</span>
                  <span>·</span>
                  <span>조회 311</span>
              </div>
  
          </section>
          <section className="post__report">
  
              <button className="section__header" type="button">
                  <h2 className="section__title">이 게시글 신고하기</h2>
                  <img src="./assets/right-chevron.svg" alt="신고하기"/>
              </button>
  
          </section>
          <section className="post__other-product">
              <button className="section__header" type="button">
              <h2 className="section__title">감성탐방러님의 판매 상품</h2>
              <img src="./assets/right-chevron.svg" alt="화면이동"/>
              </button>
  
              <div className="products__grid">
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  
  
              </div>
          </section>
  
          <section className="post__other-product">
              <div className="section__header" type="button">
              <h2 className="section__title">이 글과 함께 봤어요</h2>
              </div>
  
              <div className="products__grid">
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  <button className="product__container">
                      <img className="product__img" src="http://placehold.co/240" alt="상품1"/>
                      <span className="product__name">에어팟 미개봉</span>
                      <span className="product__price">240,000원</span>
                  </button>
                  
  
              </div>
          </section>
      </article>
    );
  };

  export default Content;