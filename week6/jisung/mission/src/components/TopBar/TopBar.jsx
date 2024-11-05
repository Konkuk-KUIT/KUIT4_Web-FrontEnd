import React from "react";
import phoneStatus from "../../assets/Image/phoneStatus.png";
import time from "../../assets/Image/time.png";
import chevron_left from "../../assets/Image/chevron-left.png";
import { DeviceStatus, TopBarBackButton } from "./TopBar.styles";

const TopBar = ({ isBackButtonEnabled }) => {
  return (
    <div>
      <DeviceStatus>
        <img style={{ width: "54px", height: "21px" }} src={time} alt="Time" />
        <img
          style={{ width: "54px", height: "15px", marginTop: "3px" }}
          src={phoneStatus}
          alt="Phone Status"
        />
      </DeviceStatus>

      {isBackButtonEnabled ? (
        <TopBarBackButton>
          <img
            style={{ width: "24px", height: "24px" }}
            src={chevron_left}
            alt="Back"
          />
        </TopBarBackButton>
      ) : null}
    </div>
  );
};

export default TopBar;
