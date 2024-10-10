import React from "react";
const Content = () => {
  return (
    <div className="item-list">
      <button type="button" className="item-container">
        <img src="assets/airpot.svg" alt="에어팟" />

        <div className="item-desc">
          <div className="item-info">
            <span className="item-name">에어팟 프로</span>

            <div className="item-about">
              <span>군자동</span>
              <span>·</span>
              <span>3일전</span>
            </div>
            <span className="item-price">220,000원</span>
          </div>

          <div className="item-follower">
            <div className="comments">
              <img src="assets/comments.svg" alt="댓글" />
              <span>3</span>
            </div>
            <div className="likes">
              <img src="assets/likes.svg" alt="좋아요" />
              <span>11</span>
            </div>
          </div>
        </div>
      </button>
      <div className="divider"> </div>
      <button type="button" className="item-container">
        <img src="assets/airpot.svg" alt="에어팟" />

        <div className="item-desc">
          <div className="item-info">
            <span className="item-name">바이레도 블랑쉬 50ml</span>

            <div className="item-about">
              <span>광진구 구의제3동</span>
              <span>·</span>
              <span>26초 전</span>
            </div>
            <span className="item-price">4,000원</span>
          </div>

          <div className="item-follower">
            <div className="likes">
              <img src="assets/likes.svg" alt="좋아요" />
              <span>2</span>
            </div>
          </div>
        </div>
      </button>
      <div className="divider"> </div>
      <button type="button" className="item-container">
        <img src="assets/airpot.svg" alt="에어팟" />

        <div className="item-desc">
          <div className="item-info">
            <span className="item-name">샌드위치</span>

            <div className="item-about">
              <span>동대문구 휘경동</span>
              <span>·</span>
              <span>끌올 59초 전</span>
            </div>
            <span className="item-price">8,000원</span>
          </div>
        </div>
      </button>
      <div className="divider"> </div>
      <button type="button" className="item-container">
        <img src="assets/airpot.svg" alt="에어팟" />

        <div className="item-desc">
          <div className="item-info">
            <span className="item-name">아이폰 13프로맥스</span>

            <div className="item-about">
              <span>군자동</span>
              <span>·</span>
              <span>1일 전</span>
            </div>
            <span className="item-price">1,000,000원</span>
          </div>

          <div className="item-follower">
            <div className="comments">
              <img src="assets/comments.svg" alt="댓글" />
              <span>7</span>
            </div>
            <div className="likes">
              <img src="assets/likes.svg" alt="좋아요" />
              <span>21</span>
            </div>
          </div>
        </div>
      </button>
      <div className="divider"> </div>
      <button type="button" className="item-container">
        <img src="assets/airpot.svg" alt="에어팟" />

        <div className="item-desc">
          <div className="item-info">
            <span className="item-name">커피머신</span>

            <div className="item-about">
              <span>구리시 교문동</span>
              <span>·</span>
              <span>1초전</span>
            </div>
            <span className="item-price">100,000원</span>
          </div>

          <div className="item-follower">
            <div className="comments">
              <img src="assets/comments.svg" alt="댓글" />
              <span>5</span>
            </div>
            <div className="likes">
              <img src="assets/likes.svg" alt="좋아요" />
              <span>7</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Content;
