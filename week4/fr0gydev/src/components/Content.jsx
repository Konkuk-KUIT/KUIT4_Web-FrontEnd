import React from "react";
import airpodsPro from '../assets/airpodspro.svg';
import chat from '../assets/chat.svg';
import heart from '../assets/heart.svg';
import byredo from '../assets/바이레도.svg';
import sandwich from '../assets/샌드위치.svg';
import iphone from '../assets/iphone13promax.svg';
import nintendo from '../assets/nintendo.svg';

const Content = () => {
  return (
    <main className="product-list">
      <div className="product-item">
        <img src={airpodsPro} alt="에어팟 프로" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">에어팟 프로</h2>
          <p className="product-meta">군자동 · 3일 전</p>
          <p className="product-price">220,000원</p>
          <div className="product-reactions">
            <span className="comment-count">
              <img src={chat} alt="채팅 개수" /> 3
            </span>
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 11
            </span>
          </div>
        </div>
      </div>
      <div className="product-item">
        <img src={byredo} alt="바이레도 블랑쉬 50ml" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">바이레도 블랑쉬 50ml</h2>
          <p className="product-meta">광진구 구의제3동 · 26초 전</p>
          <p className="product-price">4,000원</p>
          <div className="product-reactions">
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 2
            </span>
          </div>
        </div>
      </div>

      <div className="product-item">
        <img src={sandwich} alt="샌드위치" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">샌드위치</h2>
          <p className="product-meta">동대문구 휘경동 · 끌올 59초 전</p>
          <p className="product-price">8,000원</p>
        </div>
      </div>

      <div className="product-item">
        <img src={iphone} alt="아이폰 13프로맥스" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">아이폰 13프로맥스</h2>
          <p className="product-meta">군자동 · 1일 전</p>
          <p className="product-price">1,000,000원</p>
        </div>
      </div>

      <div className="product-item">
        <img src={nintendo} alt="닌텐도 스위치" className="product-image" />
        <div className="product-info">
          <h2 className="product-title">닌텐도 스위치</h2>
          <p className="product-meta">구리시 교문1동 · 1초 전</p>
          <p className="product-price">120,000원</p>
          <div className="product-reactions">
            <span className="comment-count">
              <img src={chat} alt="채팅 개수" /> 1
            </span>
            <span className="like-count">
              <img src={heart} alt="하트 개수" /> 15
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;