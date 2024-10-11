import React from "react";
import chatIcon from "../assets/chat.svg";
import likeIcon from "../assets/like.svg";

const Post = ({ items }) => {
    return (
        <div className="post-container">
            {items
                .filter(item => item.isSold) 
                .map((item, index) => (
                    <div key={index} className="post">
                        <div>
                            <img className="product-img"/>
                        </div>
                        <div className="product__info">
                            <div className="product-header">
                                <span className="product__name">{item.title}</span>
                                <div className="product-desc">
                                    <span>{item.location}</span>
                                    <span>·</span>
                                    <span>{item.timeAgo}</span>
                                </div>
                                <span className="product__price">{item.price}</span>
                            </div>
                            <div className="product-bottom">
                                {item.comments > 0 && (  
                                    <div>
                                        <img src={chatIcon} alt="댓글" />
                                        <span className="count">{item.comments}</span>
                                    </div>
                                )}
                                {item.likes > 0 && (  
                                    <div>
                                        <img src={likeIcon} alt="좋아요" />
                                        <span className="count">{item.likes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Post;
