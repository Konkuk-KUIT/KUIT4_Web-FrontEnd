import React from "react";
const Bottom = () => {
    return (
        <nav className="bottom-bar">
            <button className="btn" type="button">
                <img src={bottomHomeIcon} alt="홈" />
                <span className="desc">홈</span>
            </button>
            <button className="btn" type="button">
                <img src={newsIcon} alt="동네생활" />
                <span className="desc">동네생활</span>
            </button>
            <button className="btn" type="button">
                <img src={localIcon} alt="내 근처" />
                <span className="desc">내 근처</span>
            </button>
            <button className="btn" type="button">
                <img src={bottomChatIcon} alt="채팅" />
                <span className="desc">채팅</span>
            </button>
            <button className="btn" type="button">
                <img src={myIcon} alt="나의당근" />
                <span className="desc">나의 당근</span>
            </button>
            <button className="plus-btn" type="button">
                <img className="plus-img" src={plusIcon} alt="글쓰기" />
            </button>
        </nav>
    );
};

export default Bottom;
