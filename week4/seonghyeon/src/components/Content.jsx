import React from "react";
import Item from "./Item";
import marketModel from "../MarketModel";

const Content = () => {
  return (
    <div>
      {marketModel.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Content;