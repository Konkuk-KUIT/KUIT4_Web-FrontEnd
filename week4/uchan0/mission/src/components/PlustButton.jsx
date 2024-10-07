import React from "react";
import ImageCollection from "../ImageCollection";

const PlusButton = () => {
  return (
    <button className="plus-button" type="button">
      <ImageCollection imgName={"plus.svg"} />
    </button>
  );
};

export default PlusButton;
