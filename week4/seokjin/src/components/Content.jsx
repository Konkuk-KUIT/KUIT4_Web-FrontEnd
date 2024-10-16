import React from "react";

const Content = ({ posts }) => {
    return (
        <section className="post-container">
            <div className="post-grid">
                {posts.map((post, index) => {
                    // 비구조화 할당
                    const { image, title, location, date, price, comments, hearts, isSold } = post;

                    // 조건부 렌더링
                    if (isSold) {
                        return (
                            <div key={index} className="post-grid">
                                <img src={image} alt={title} />
                                <div className="post-desc">
                                    <div className="post-info">
                                        <h2>{title}</h2>
                                        <div className="position_date">
                                            <span>{location}</span>
                                            <span>.</span>
                                            <span>{date}</span>
                                        </div>
                                        <span className="price">{price}</span>
                                    </div>
                                    <div className="post-comment">
                                        <button>
                                            <img src="./assets/comments.svg" alt="댓글" />
                                            <span className="counts">{comments}</span>
                                        </button>
                                        <button>
                                            <img src="./assets/heart.svg" alt="하트" />
                                            <span className="counts">{hearts}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                        );
                    }
                    return null; // isSold가 false인 경우에는 아무것도 렌더링하지 않음
                })}
            </div>
        </section>
    );
};

export default Content;