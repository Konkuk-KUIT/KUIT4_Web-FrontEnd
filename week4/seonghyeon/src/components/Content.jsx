import React from "react";
import Item from "./Item";
import marketModel from "../MarketModel";

const Content = () => {
    const filteredItems = marketModel.filter((item) => item.isSold == true)
  return (
    <div>
      {filteredItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Content;