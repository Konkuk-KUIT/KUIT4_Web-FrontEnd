import React from "react";

const Content = () => {
    const posts = [
        {
            id: 1,
            image: "./assets/airpot.svg",
            title: "에어팟프로",
            location: "군자동",
            date: "3일전",
            price: "220,000원",
            comments: 3,
            hearts: 11,
        },
        {
            id: 2,
            image: "./assets/blansh.svg",
            title: "바이레도 블랑쉬 50ml",
            location: "광진구 구의 제 3동",
            date: "26초전",
            price: "4,000원",
            comments: 0,
            hearts: 2,
        },
        {
            id: 3,
            image: "./assets/sandwich.svg",
            title: "샌드위치",
            location: "동대문구 휘경동",
            date: "끌올 59초전",
            price: "8,000원",
            comments: 0,
            hearts: 0,
        },
        {
            id: 4,
            image: "./assets/iphone.svg",
            title: "아이폰 13프로맥스",
            location: "군자동",
            date: "1일전",
            price: "1,000,000원",
            comments: 0,
            hearts: 0,
        },
        {
            id: 5,
            image: "./assets/airpot.svg",
            title: "에어팟프로(실착 1회)",
            location: "화양동",
            date: "2일전",
            price: "200,000원",
            comments: 0,
            hearts: 0,
        },
    ];

    return (
        <section className="post-container">
            <div className="post-grid">
                {posts.map((post) => (
                    <div key={post.id} className="post-grid">
                        <img src={post.image} alt={post.title} />
                        <div className="post-desc">
                            <div className="post-info">
                                <h2>{post.title}</h2>
                                <div className="position_date">
                                    <span>{post.location}</span>
                                    <span>.</span>
                                    <span>{post.date}</span>
                                </div>
                                <span className="price">{post.price}</span>
                            </div>
                            <div className="post-comment">
                                <button>
                                    <img src="./assets/comments.svg" alt="댓글" />
                                    <span className="counts">{post.comments}</span>
                                </button>
                                <button>
                                    <img src="./assets/heart.svg" alt="하트" />
                                    <span className="counts">{post.hearts}</span>
                                </button>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                ))}
            </div>
        </section>
    );
    };

export default Content;