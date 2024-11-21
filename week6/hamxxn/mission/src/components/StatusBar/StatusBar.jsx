import Battery from "../../assets/battery.svg";
import Wifi from "../../assets/wifi.svg";
import Mobile from "../../assets/mobile.svg";
import LeftChevron from "../../assets/left-chevron.svg";

import { StatusWrapper, Under } from "./StausBar.styles";
// eslint-disable-next-line react/prop-types
const StatusBar = ({ back, cancel }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        height: `var(--status-bar)`,
      }}
    >
      <StatusWrapper>
        <div className="time-wrapper">10:41</div>
        <div className="icons-wrapper">
          <img src={Mobile} alt="mobile icon" />
          <img src={Wifi} alt="wifi icon" />
          <img src={Battery} alt="battery icon" />
        </div>
      </StatusWrapper>
      <Under>
        {back && <img src={LeftChevron} alt="Go back button" />}
        {cancel && <p>주문취소</p>}
      </Under>
    </div>
  );
};

export default StatusBar;
