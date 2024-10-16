import React from "react";

const ItemInfo = ({ item }) => {
  return (
    <div className="item-info">
      <h2>{item.title}</h2>
      <p>{item.location} · {item.date}</p>
      <span className="price">{item.price}</span>
      <div className="item-interest">
        <div className="item-cheat">
          <img src="./assets/chat.svg" alt="내 근처" />
        </div>
        <span className="item-meta">{item.chatCount}</span>
        <div className="item-cheat">
          <img src="./assets/heart.svg" alt="내 근처" />
        </div>
        <span className="item-meta">{item.heartCount}</span>
      </div>
    </div>
  );
};

export default ItemInfo;