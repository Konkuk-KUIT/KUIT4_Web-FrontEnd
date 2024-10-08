import icon_chat_mini from "../assets/chat-mini.svg";
import icon_heart from "../assets/heart.svg";

import img_product_1 from "../assets/product-img1.svg";
import img_product_2 from "../assets/product-img2.svg";
import img_product_3 from "../assets/product-img3.svg";
import img_product_4 from "../assets/product-img4.svg";
import img_product_5 from "../assets/product-img5.svg";

const Content = () => {
  return (
    <section class="home-posts">

      <button class="product-post" type="button">
        <img class="product-img" src={img_product_1} alt="product image 1" />
        <div class="product-info">
          <div class="product-name">에어팟 프로 왼쪽 유닛</div>
          <div class="product-location">군자동 · 3일 전</div>
          <div class="product-price">220,000원</div>
          <div class="product-contact">
            <img src={icon_chat_mini} alt="chat count" />
            <span class="product-count">3</span>
            <img src={icon_heart} alt="like count" />
            <span class="product-count">11</span>
          </div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src={img_product_2} alt="product image 2" />
        <div class="product-info">
          <div class="product-name">바이레도 블랑쉬 50ml</div>
          <div class="product-location">광진구 구의제3동 · 26초 전</div>
          <div class="product-price">4,000원</div>
          <div class="product-contact">
            <img src={icon_heart} alt="like count" />
            <span class="product-count">2</span>
          </div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src={img_product_3} alt="product image 3" />
        <div class="product-info">
          <div class="product-name">샌드위치</div>
          <div class="product-location">동대문구 휘경동 · 끌올 59초 전</div>
          <div class="product-price">8,000원</div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src={img_product_4} alt="product image 4" />
        <div class="product-info">
          <div class="product-name">아이폰 13 pro max</div>
          <div class="product-location">군자동 · 1일 전</div>
          <div class="product-price">1,000,000원</div>
          <div class="product-contact">
            <img src={icon_chat_mini} alt="chat count" />
            <span class="product-count">133</span>
          </div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src={img_product_5} alt="product image 5" />
        <div class="product-info">
          <div class="product-name">드롱기 커피머신</div>
          <div class="product-location">구리시 교문1동 · 1초 전</div>
          <div class="product-price">100,000원</div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src="http://placehold.co/110" alt="product image 6" />
        <div class="product-info">
          <div class="product-name">닌텐도 스위치 올레드</div>
          <div class="product-location">구의동 · 12초 전</div>
          <div class="product-price">150,000원</div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src="http://placehold.co/110" alt="product image 7" />
        <div class="product-info">
          <div class="product-name">해피머니 만원</div>
          <div class="product-location">구리시 교문3동 · 8일 전</div>
          <div class="product-price">2,000원</div>
        </div>
      </button>

      <button class="product-post" type="button">
        <img class="product-img" src="http://placehold.co/110" alt="product image 8" />
        <div class="product-info">
          <div class="product-name">기아 레이</div>
          <div class="product-location">2018년식 · 누적 18.4만km</div>
          <div class="product-price">525만원</div>
          <div class="product-contact">
            <img src={icon_heart} alt="like count" />
            <span class="product-count">24</span>
          </div>
        </div>
      </button>

    </section>
  );
};
export default Content;