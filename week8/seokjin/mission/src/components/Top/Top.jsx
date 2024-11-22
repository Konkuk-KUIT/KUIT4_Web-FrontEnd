import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, TopContainer, Time, IconsContainer, Notch, Under } from "./Top.styles";
import SignalIcon from '../../assets/mobileSignal.svg';
import WifiIcon from '../../assets/wifi.svg';
import BatteryIcon from '../../assets/battery.svg';
import ArrowIcon from '../../assets/arrow.svg';

const Top = () => {
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isCart = location.pathname === "/cart";
  
  return (
    <Wrapper>
      <TopContainer>
        <Time>9:41</Time>
        <Notch />
        <IconsContainer>
          <img src={SignalIcon} alt="Signal strength" />
          <img src={WifiIcon} alt="WiFi" />
          <img src={BatteryIcon} alt="Battery" />
        </IconsContainer>
      </TopContainer>
      <Under>
        {!isHomePage && <img src={ArrowIcon} alt="Arrow" />} {/* "/"일 때만 ArrowIcon 숨기기 */}
        {isCart && <p>주문취소</p>}
      </Under>
    </Wrapper>
  );
};

export default Top;
