import React from "react";
import ItemInfo from "./ItemInfo";

const Item = ({ item }) => {
  return (
    <div className="item" key={item.id}>
      <img src={item.image} alt={item.title} />
      <ItemInfo item={item} />
    </div>
  );
};

export default Item;