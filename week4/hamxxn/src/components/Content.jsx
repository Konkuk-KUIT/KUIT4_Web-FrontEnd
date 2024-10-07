import ChatMessageBlock from "../assets/chat-message_block.svg";

import Heart from "../assets/heart.svg";
import "../styles/Content.css";
const Content = () => {
  return (
    <>
      <div className="product-list">
        <div className="product-item">
          <div className="product-item__image">
            <img src="http://placehold.co/110" alt="에어팟 프로" />
          </div>
          <div className="product-item__details">
            <h2 className="product-item__name">에어팟 프로</h2>
            <div className="product-item__location">군자동 · 3일 전</div>
            <span className="product-item__price">220,000원</span>

            <div className="product-item__meta">
              <div className="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span className="meta-text">3</span>
              </div>

              <div className="meta__wrap">
                <img src={Heart} alt="하트 이미지" className="meta_icon" />
                <span className="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="underline_1px"></div>

        <div className="product-item">
          <div className="product-item__image">
            <img src="http://placehold.co/110" alt="바이레도 블랑쉬 50ml" />
          </div>
          <div className="product-item__details">
            <h2 className="product-item__name">바이레도 블랑쉬 50ml</h2>
            <div className="product-item__location">
              광진구 구의제3동 · 26초 전
            </div>
            <span className="product-item__price">4,000원</span>

            <div className="product-item__meta">
              <div className="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span className="meta-text">3</span>
              </div>

              <div className="meta__wrap">
                <img src={Heart} alt="하트 이미지" className="meta_icon" />
                <span className="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="underline_1px"></div>

        <div className="product-item">
          <div className="product-item__image">
            <img src="http://placehold.co/110" alt="샌드위치" />
          </div>
          <div className="product-item__details">
            <h2 className="product-item__name">샌드위치</h2>
            <div className="product-item__location">
              동대문구 휘경동 · 끌올 59초 전
            </div>
            <span className="product-item__price">8,000원</span>

            <div className="product-item__meta">
              <div className="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span className="meta-text">3</span>
              </div>

              <div className="meta__wrap">
                <img src={Heart} alt="하트 이미지" className="meta_icon" />
                <span className="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="underline_1px"></div>

        <div className="product-item">
          <div className="product-item__image">
            <img src="http://placehold.co/110" alt="아이폰 13프로맥스" />
          </div>
          <div className="product-item__details">
            <h2 className="product-item__name">아이폰 13프로맥스</h2>
            <div className="product-item__location">군자동 · 1일 전</div>
            <span className="product-item__price">220,000원</span>

            <div className="product-item__meta">
              <div className="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span className="meta-text">3</span>
              </div>

              <div className="meta__wrap">
                <img src={Heart} alt="하트 이미지" className="meta_icon" />
                <span className="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="underline_1px"></div>

        <div className="product-item">
          <div className="product-item__image">
            <img src="http://placehold.co/110" alt="커피머신" />
          </div>
          <div className="product-item__details">
            <h2 className="product-item__name">커피머신</h2>
            <div className="product-item__location">군자동 · 1초 전</div>
            <span className="product-item__price">1,000,000원</span>

            <div className="product-item__meta">
              <div className="meta__wrap">
                <img src={ChatMessageBlock} alt="채팅 이미지" />

                <span className="meta-text">3</span>
              </div>

              <div className="meta__wrap">
                <img src={Heart} alt="하트 이미지" className="meta_icon" />
                <span className="meta-text">3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="underline_1px"></div>
      </div>
    </>
  );
};
export default Content;
