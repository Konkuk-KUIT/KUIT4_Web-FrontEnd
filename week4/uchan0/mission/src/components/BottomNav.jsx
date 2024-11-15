import React from "react";
import ImageCollection from "../ImageCollection";

const BottomNav = () => {
  return (
    <div>
      <nav className="bottom-bar">
        <button type="button">
          <ImageCollection imgName={"home.svg"} />
          <div className="bar__text">홈</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"life.svg"} />
          <div className="bar__text">동네생활</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"nearby.svg"} />
          <div className="bar__text">내 근처</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"chat.svg"} />
          <div className="bar__text">채팅</div>
        </button>
        <button type="button">
          <ImageCollection imgName={"mydaangn.svg"} />
          <div className="bar__text">나의 당근</div>
        </button>
      </nav>
    </div>
  );
};

export default BottomNav;
