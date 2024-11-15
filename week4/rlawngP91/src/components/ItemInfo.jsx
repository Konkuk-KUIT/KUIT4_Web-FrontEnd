import React from 'react';

const ItemInfo = ({ item }) => {
    // item이 없는경우 -> 오류확인
    if (!item) {
        return <div>상품 정보가 없습니다.</div>;
    }

    const isSold = item.isSold ?? false; // isSold가 undefined이면 false로 처리

    return (
        <div className={`item ${isSold ? 'sold' : ''}`}>
            <img src={`./assets/${item.image}`} alt={item.title} className="item-image" />
            <div className="item-info">
                <h2>{item.title}</h2>
                <div className="item-meta">
                    <span>{item.location}</span>
                    <span>·</span>
                    <span>{item.timeAgo}</span>
                </div>
                <span className="item-price">{item.price}</span>
                <div className="item-stats">
                    {item.comments > 0 && (
                        <div className="item-comments">
                            <img src="./assets/comment.svg" alt="댓글" />
                            <span>{item.comments}</span>
                        </div>
                    )}
                    {item.likes > 0 && (
                        <div className="item-likes">
                            <img src="./assets/heart.svg" alt="하트" />
                            <span>{item.likes}</span>
                        </div>
                    )}
                </div>
                {isSold && <span className="item-sold">판매 완료</span>}
            </div>
        </div>
    );
};

export default ItemInfo;
