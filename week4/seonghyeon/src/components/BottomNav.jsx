import React from "react";
import BottomComponent from "./BottomComponent";
import navItems from "../BottomModel";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      {navItems.map((navItem) => (
        <BottomComponent navItem={navItem} key={navItem.id} />
      ))}
    </div>
  );
};

export default BottomNav;