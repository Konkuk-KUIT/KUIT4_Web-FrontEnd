import React from "react";

const Header = () => {
  return (
    <header>
        <div className="header-left-container">
            <button type="button">
                <span>군자동</span>
            </button>
            <button type="button">
                <img src="./assets/downchevron.svg" alt="down chevron" />
            </button>
        </div>
        <div className="header-icon-container">
            <button type="button">
                <img className="preview" src="./assets/searching.svg" alt="검색하기" />
            </button>
            <button type="button">
                <img className="preview" src="./assets/menu.svg" alt="메뉴" />
            </button>
            <button>
                <img className="preview" src="./assets/bell.svg" alt="종모양" />
            </button>
        </div>
    </header>
);
};

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

const BottomNav = () => {
  const navItems = [
    { id: 1, image: "./assets/home.svg", label: "홈" },
    { id: 2, image: "./assets/dongne.svg", label: "동네생활" },
    { id: 3, image: "./assets/nearby.svg", label: "내 근처" },
    { id: 4, image: "./assets/chat.svg", label: "채팅" },
    { id: 5, image: "./assets/mydanggn.svg", label: "나의 당근" },
];

return (
    <footer className="bottom_bar">
        <div className="circle_button">
            <button type="button">
                <img src="./assets/plus.svg" alt="플러스 버튼" />
            </button>
        </div>
        <div className="bottom_imgs_container">
            {navItems.map((item) => (
                <div key={item.id} id={`img${item.id}-container`}>
                    <div className="icon_container">
                        <button type="button">
                            <img src={item.image} alt={`${item.label} 아이콘`} />
                        </button>
                    </div>
                    <div className="icon_name_container">
                        <span className="icon_name">{item.label}</span>
                    </div>
                </div>
            ))}
        </div>
    </footer>
);
};

const Home = () => {
  return (
    <div className="contents">
        <Header />
        <Content />
        <BottomNav />
    </div>
  );
};

export default Home;
