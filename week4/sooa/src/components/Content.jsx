import "../styles/Content.css";

import Production1 from "../assets/production1.svg";
import Production2 from "../assets/production2.svg";
import Production3 from "../assets/production3.svg";
import Production4 from "../assets/production4.svg";
import Production5 from "../assets/production5.svg";
import Chat from "../assets/chat.svg";
import Heart from "../assets/heart.svg";

const Content = () => {
  return (
    <>
      <section>
        <button className="item-container">
          <img src={Production1} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">에어팟 프로</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>3일 전</span>
              </div>
              <span className="item__price">220,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Chat} alt="댓글 개수 표현 사진" />
                <span>3</span>
              </div>
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>11</span>
              </div>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production2} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">바이레도 블랑쉬 50ml</span>
              <div className="item__subdesc">
                <span>광진구 구의제3동</span>
                <span>·</span>
                <span>26초 전</span>
              </div>
              <span className="item__price">4,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>2</span>
              </div>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production3} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">샌드위치</span>
              <div className="item__subdesc">
                <span>동대문구 휘경동</span>
                <span>·</span>
                <span>끌올 59초 전</span>
              </div>
              <span className="item__price">8,000원</span>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production4} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">아이폰 13프로맥스</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>1일 전</span>
              </div>
              <span className="item__price">1,000,000원</span>
            </div>
          </div>
        </button>
        <button className="item-container">
          <img src={Production5} alt="상품 판매 사진" />
          <div className="item">
            <div className="item__desc">
              <span className="item__name">에어팟 프로</span>
              <div className="item__subdesc">
                <span>군자동</span>
                <span>·</span>
                <span>3일 전</span>
              </div>
              <span className="item__price">220,000원</span>
            </div>
            <div className="item__icon">
              <div className="item__icon-container">
                <img src={Chat} alt="댓글 개수 표현 사진" />
                <span>3</span>
              </div>
              <div className="item__icon-container">
                <img src={Heart} alt="좋아요 개수 표현 사진" />
                <span>11</span>
              </div>
            </div>
          </div>
        </button>
      </section>
    </>
  );
};

export default Content;
