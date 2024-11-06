import React from "react";
import phoneStatus from "../../assets/Image/phoneStatus.png";
import time from "../../assets/Image/time.png";
import { DeviceStatus } from "./DeviceStatusBar.styles";

const DeviceStatusBar = () => {
  return (
    <DeviceStatus>
      <img style={{ width: "54px", height: "21px" }} src={time} alt="Time" />
      <img
        style={{ width: "54px", height: "15px", marginTop: "3px" }}
        src={phoneStatus}
        alt="Phone Status"
      />
    </DeviceStatus>
  );
};

export default DeviceStatusBar;
