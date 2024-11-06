import React from "react";

import chevron_left from "../../assets/Image/chevron-left.png";

import {
  TopBarWrapper,
  TopBarBackButton,
  CancelOrderButton,
} from "./TopBar.styles";

const TopBar = ({ isCancelButtonEnabled }) => {
  return (
    <TopBarWrapper>
      <TopBarBackButton>
        <img
          style={{ width: "24px", height: "24px" }}
          src={chevron_left}
          alt="Back"
        />
      </TopBarBackButton>
      {isCancelButtonEnabled ? (
        <CancelOrderButton> 주문취소 </CancelOrderButton>
      ) : null}
    </TopBarWrapper>
  );
};

export default TopBar;
