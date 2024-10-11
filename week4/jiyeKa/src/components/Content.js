import heart from '../assets/heart.svg';
import chat from '../assets/chat.svg';
import marketModel from '../models/MarketModels';

const Content = () => {
    const {items} = marketModel;
    return(
        <div className="main-contents">
            {items.map((item, index) => { // 배열 렌더링 사용
                const {isSold, image, title, location, timeAgo, price, comments, likes}=item; // 비구조화 할당
                return isSold && ( // isSold : true만 렌더링 (조건부 렌더링 사용)
                <div key={index} className="main-article">
                    <img src={image} className="product-img" alt={`제품 사진-${index + 1}`} />
                    <div className="main-frame">
                        <div className="article-desc">
                            <div className="desc-header">{title}</div>
                            <div className="desc-text">
                                <div className="desc-location">{location}</div>
                                <div className="desc-divide">·</div>
                                <div className="desc-when">{timeAgo}</div>
                            </div>
                            <div className="desc-cost">{price}</div>
                            <div className="desc-btns">
                            {item.comments > 0 && ( // comments가 존재해야 렌더링
                                <>
                                    <img src={chat} />
                                    <span>{comments}</span>
                                </>
                            )}
                            {item.likes > 0 && ( // likes가 존재해야 렌더링
                                <>
                                    <img src={heart} />
                                    <span>{likes}</span>
                                </>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>

    );
};

export default Content;