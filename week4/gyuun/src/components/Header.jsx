import React from "react";
import "./index.css";
//그림은 여기부터
import blackboxImage from '../assets/blackbox.svg';
import signalImage from '../assets/signal.svg';
const Clock = () => {
    return <div><div className="clock">01:45</div></div>;
  };
  
  const Blackbox = () => {
    return (
      <div>
        <img src={blackboxImage} alt="black" className="blackbox" />
      </div>
    );
  };
  
  const Topmenu = () => {
    return (
      <div className="top-menu">
        <img src={signalImage} alt="signal" className="signal" />
        
      </div>
    );
  };
  
  const Header = () => {
    return (
      <section className="top-bar">
        <Clock />
        <Blackbox />
        <Topmenu />
      </section>
    );
  };
  export default Header;
