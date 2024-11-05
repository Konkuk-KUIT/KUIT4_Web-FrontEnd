import React from "react";

import chevron_left from "../../assets/Image/chevron-left.png";

import { TopBarBackButton } from "./TopBar.styles";

const TopBar = ({ isCancelButtonEnabled }) => {
  return (
    <div>
        <TopBarBackButton>
        <img
            style={{ width: "24px", height: "24px" }}
            src={chevron_left}
            alt="Back"
          />
        </TopBarBackButton>
      {isCancelButtonEnabled ? (
        <div> 주문취소 </div>
      ) : null}
    </div>
  );
};

export default TopBar;
