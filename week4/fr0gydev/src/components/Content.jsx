import React from "react";
import chat from "../assets/chat.svg";
import heart from "../assets/heart.svg";
import airpodspro from "../assets/airpodspro.svg";
import byredo from "../assets/바이레도.svg";
import sandwich from "../assets/샌드위치.svg";
import iphone13promax from "../assets/iphone13promax.svg";
import nintendo from "../assets/nintendo.svg";

const imageMap = {
  "airpodspro.svg": airpodspro,
  "바이레도.svg": byredo,
  "샌드위치.svg": sandwich,
  "iphone13promax.svg": iphone13promax,
  "nintendo.svg": nintendo,
};

// props로 전달받은 products 사용
const Content = ({ products }) => {
  return (
    <main className="product-list">
      {/* 배열 렌더링 사용 (map 함수 사용) */}
      {products.map(
        ({
          id,
          name,
          image,
          location,
          timestamp,
          price,
          chatCount,
          likeCount,
        }) => (
          // 비구조화 할당 사용
          <div key={id} className="product-item">
            <img src={imageMap[image]} alt={name} className="product-image" />
            <div className="product-info">
              <h2 className="product-title">{name}</h2>
              <p className="product-meta">
                {location} · {timestamp}
              </p>
              <p className="product-price">{price.toLocaleString()}원</p>
              <div className="product-reactions">
                {/* 조건부 렌더링 사용 */}
                {chatCount > 0 && (
                  <span className="comment-count">
                    <img src={chat} alt="채팅 개수" /> {chatCount}
                  </span>
                )}
                {likeCount > 0 && (
                  <span className="like-count">
                    <img src={heart} alt="하트 개수" /> {likeCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </main>
  );
};

export default Content;
