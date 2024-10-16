import React from "react";

const BottomNav = () => {
    const navItems = [
        { id: 1, image: "./assets/home.svg", label: "홈" },
        // 나머지 네비게이션 아이템 생략...
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

export default BottomNav;