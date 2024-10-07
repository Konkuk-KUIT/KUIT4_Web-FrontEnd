// Home.jsx
import React from "react";
import "./components/index.css";
import marketModel from "./models/MarketModel"; // MarketModel.js에서 데이터 가져오기

import blackboxImage from './assets/blackbox.svg';
import signalImage from './assets/signal.svg';
import tranImage from './assets/tran.svg';
import seeImage from './assets/see.svg';
import vectorImage from './assets/vector.svg';
import vectorsImage from './assets/vectors.svg';
import comment from './assets/comment.svg';

import heart from './assets/heart.svg';
import plus from './assets/plus.svg';
import homein from './assets/home_indicator.svg';

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

const Middletopheaderaddress = () => {
  return (
    <div className="header__address">
      <div className="header__address-title">
        {marketModel.location}
      </div>
      <img src={tranImage} alt="잉" className="tran" />
    </div>
  );
};

const Middletopheadericons = () => {
  return (
    <div className="header__icons">
      <img src={seeImage} alt="봐라" />
      <img src={vectorImage} alt="보라고" />
      <img src={vectorsImage} alt="넹" />
    </div>
  );
};

const Middletop = () => {
  return (
    <div className="middel-top-bar">
      <Middletopheaderaddress />
      <Middletopheadericons />
    </div>
  );
}; 
const Line2 = () =>{
  return <>
  <div className="line2"></div>
  </>
}

const Middlecontent = () => {
  return <>
    {marketModel.items
    .filter(item => item.isSold)
    .map((item,index)=>(
      <div key = {index} className="middle_content_s">
        <img src={item.image} alt="" className="contentimg" />
        <div className="middle_content_s_right">
            <div className="middle_content_s_top">
              <div className="title">{item.title}</div>
              <div className="title_location">{item.location} · {item.timeAgo}</div>
              <div className="discount">{item.price}</div>
            </div>

            <div className="middle_content_s_bottom">
              <div className="middle_content_icontent">
                    <img src={comment} alt="comment" className="icon" />
                    <div className="middle_content_content">{item.comments}</div>
              </div>
              <div className="middle_content_icontent">
              <img src={heart} alt="heart" className="icon" />
                    <div className="middle_content_content">{item.likes}</div>
             
              </div>
            </div>

            

        </div>

      </div>

    ))}

  </>
};

const Content = () => {
  return (
    <div className="middle-menu">
      <Middletop />
      <Line2/>
      <div className="middle_content">
      <Middlecontent />
      </div>
    </div>
  );
};
const Bottommenubutton = ()=>{
  return(
    <>
    <div className="botton_menu_button">
      <div className="circle">
        <img src={plus} alt="" />
      </div>
    </div>
    </>
  );
}
const Bottommenubar = ()=>{
  return (
    <>
    <div className="botton_menu_bar">
      <div className="botton_menu_bar_top">
        {marketModel.home.map(({ image, location }, index)=>(
          <div key={index} className="menu_bar_button">
            <img src={image} alt="" className="home1" />
            <div className="home2">{location}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
const Bottommenubarbottom = ()=>{
  return (<>
  <button className="botton_menu_bar_bottom">
    <img src={homein} alt="" className="homeindicator" />
  </button>
  </>)
}
const BottomNav = () => {
  return (<>
  <nav className="botton_menu">
    <Bottommenubutton/>
    <Bottommenubar/>
    <Bottommenubarbottom/>
  </nav>
  </>);
};

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
};

export default Home;
