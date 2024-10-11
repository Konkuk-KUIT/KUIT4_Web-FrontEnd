import airpodsImg from '../assets/airpodsImg.svg';
import heart from '../assets/heart.svg';
import chat from '../assets/chat.svg';
import blanche from '../assets/blanche.svg';
import sandwich from '../assets/sandwich.svg';
import iPhone13ProMax from '../assets/iPhone13ProMax.svg';
import coffeeMachine from '../assets/coffeeMachine.svg';


const Content = () => {
    return(
        <div class="main-contents">
            <div class="main-article">
                <img src={airpodsImg} class="product-img" alt="제품 사진-1"/>
                <div class="main-frame">
                    <div class="article-desc">
                        <div class="desc-header">에어팟 프로</div>
                        <div class="desc-text">
                            <div class="desc-location">군자동</div>
                            <div class="desc-divide">·</div>
                            <div class="desc-when">3일전</div>
                        </div>
                        <div class="desc-cost">220,000원</div>
                    </div>
                    <div class="desc-btns">
                        <img class="desc-message-img1" src={chat} />
                        <span>3</span>
                        <img class="desc-heart-img2" src={heart} />
                        <span>11</span>
                    </div>

                </div>
            </div>
            <div class="main-article">
                <img src={blanche} class="product-img" alt="제품 사진-2"/>
                <div class="main-frame">
                    <div class="article-desc">
                        <div class="desc-header">바이레도 블랑쉬 50ml</div>
                        <div class="desc-text">
                            <div class="desc-location">광진구 구의제3동 </div>
                            <div class="desc-divide">·</div>
                            <div class="desc-when">26초 전</div>
                        </div>
                        <div class="desc-cost">4,000원</div>
                    </div>
                    <div class="desc-btns">
                        <img src="assets/heart.svg" />
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div class="main-article">
                <img src={sandwich} class="product-img" alt="제품 사진-3"/>
                <div class="article-desc">
                    <div class="desc-header">샌드위치</div>
                    <div class="desc-text">
                        <div class="desc-location">동대문구 휘경동 </div>
                        <div class="desc-divide">·</div>
                        <div class="desc-when">끌올 59초전</div>
                    </div>
                    <div class="desc-cost">8,000원</div>
                    <div class="desc-btns"> </div>
                </div>
            </div>
            <div class="main-article">
                <img src={iPhone13ProMax} class="product-img" alt="제품 사진-4"/>
                <div class="article-desc">
                    <div class="desc-header">아이폰 13 프로맥스</div>
                    <div class="desc-text">
                        <div class="desc-location">군자동 </div>
                        <div class="desc-divide">·</div>
                        <div class="desc-when">1일전</div>
                    </div>
                    <div class="desc-cost">1,000,000원</div>
                    <div class="desc-btns"> </div>
                </div>
            </div>
            <div class="main-article">
                <img src={coffeeMachine} class="product-img" alt="제품 사진-5"/>
                <div class="article-desc">
                    <div class="desc-header">커피머신</div>
                    <div class="desc-text">
                        <div class="desc-location">구리시 교문1동 </div>
                        <div class="desc-divide">·</div>
                        <div class="desc-when">1초전</div>
                    </div>
                    <div class="desc-cost">100,000원</div>
                    <div class="desc-btns"> </div>
                </div>
            </div>
        </div>
    );
};

export default Content;