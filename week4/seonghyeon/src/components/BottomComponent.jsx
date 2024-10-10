import React from "react";

const BottomComponent = ({ navItem }) => {
  return (
    <div className="nav-item" key={navItem.id}>
      <img src={navItem.image} alt={navItem.alt} />
      <span>{navItem.label}</span>
    </div>
  );
};

export default BottomComponent;