import React from "react";
const Post = () => {
    return (
        <div className="post-container">
            <div className="post">
                <div>
                    <img className="product-img" src={product1} alt="product-img" />
                </div>
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">에어팟 프로</span>
                        <div className="product-desc">
                            <span>군자동</span>
                            <span>·</span>
                            <span>3일 전</span>
                        </div>
                        <span className="product__price">220,000원</span>
                    </div>
                    <div className="product-bottom">
                        <img src={chatIcon} alt="댓글" />
                        <span className="count">3</span>
                        <img src={likeIcon} alt="좋아요" />
                        <span className="count">11</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product2} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">바이레도 블랑쉬 50ml</span>
                        <div className="product-desc">
                            <span>광진구 구의제3동</span>
                            <span>·</span>
                            <span>26초 전</span>
                        </div>
                        <span className="product__price">4,000원</span>
                    </div>
                    <div className="product-bottom">
                        <img src={likeIcon} alt="좋아요" />
                        <span className="count">2</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product3} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">샌드위치</span>
                        <div className="product-desc">
                            <span>동대문구 휘경동</span>
                            <span>·</span>
                            <span>끌올 59초 전</span>
                        </div>
                        <span className="product__price">8,000원</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product4} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">아이폰 13프로맥스</span>
                        <div className="product-desc">
                            <span>군자동</span>
                            <span>·</span>
                            <span>1일 전</span>
                        </div>
                        <span className="product__price">1,000,000원</span>
                    </div>
                </div>
            </div>

            <div className="post">
                <img className="product-img" src={product5} alt="product-img" />
                <div className="product__info">
                    <div className="product-header">
                        <span className="product__name">커피머신</span>
                        <div className="product-desc">
                            <span>구리시 교문 1동</span>
                            <span>·</span>
                            <span>1초 전</span>
                        </div>
                        <span className="product__price">100,000원</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
