import StatusBarWrapper from './StatusBar.styles';
import Signal from '../../assets/signal.svg';
import Wifi from '../../assets/wifi.svg';
import Battery from '../../assets/battery.svg';

const StatusBar = () => {
  return (
    <StatusBarWrapper>
      <div className='time'>9:41</div>
      <div className='status'>
        <img src={Signal} alt="mobile signal" />
        <img src={Wifi} alt="wifi" />
        <img src={Battery} alt="battery" />
      </div>
    </StatusBarWrapper>
  );
};
export default StatusBar;